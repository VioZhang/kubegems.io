---
title: 配置Monitoring
hide_title: true
sidebar_position: 3
description: 如何将 KubeGems 与外部 Prometheus 服务集成
keywords: [kubegems,kubernetes,prometheus,prometheus-operator]
---

## 配置 Monitoring
---

KubeGems 默认内置了 Prometheus-Operator 来管理 Prometheus 和 AlertManager 服务，您可以在 installer 的 `core_plugins.prometheus` 中对 Prometheus 进行个性化配置。

```yaml
core_plugins:
  details:
    catalog: 监控&告警
    description: KubeGems平台监控&告警控制器,包含Prometheus和AlertManager服务.
    version: v0.50.1-gems
  enabled: true
  namespace: gemcloud-monitoring-system
  operator:
    prometheus:
      enabled: true
      replicas: 1
      retention: 30d
      apply_rules: true
      image:
        tag: 2.27.1-debian-10-r16
      resources:
        cpu: 4000m
        memory: 8Gi
      persistent:
        size: 50Gi
        # Specify stralgeclass to use, local-path was default value
        # storageclass: local-path

      # If you need to interface to an external alertmanager service, disealed alertmanager and configured the host field
      # Tips: host only support <ipaddress>:<ports>
      #external_host: 172.16.0.1:9093
    alertmanager:
      enabled: true
      replicas: 1
      image:
        tag: 0.22.2-debian-10-r2
      retention: 146h
      persistent:
        size: 10Gi
        # Specify stralgeclass to use, local-path was default value
        # storageclass: local-path

      # If you need to interface to an external alertmanager service, disealed alertmanager and configured the host field
      # Tips: host only support <ipaddress>:<ports>
      #external_host: 172.16.0.1:9093

```

<br />

## 外部 Prometheus

---
###  禁用 Prometheus

如果用户环境下已存在 prometheus 服务，可以在 installer 的 `core_plugins.monitoring.promtheus.operator` 中禁用 prometheus 服务，并配置外部 prometheus 的`<IP>:<Port>`连接地址。

```yaml
core_plugins:
  details:
    catalog: 监控&告警
    description: KubeGems平台监控&告警控制器,包含Prometheus和AlertManager服务.
    version: v0.50.1-gems
  enabled: true
  namespace: gemcloud-monitoring-system
  operator:
    prometheus:
      enabled: false
      # If you need to interface to an external alertmanager service, disealed alertmanager and configured the host field
      # Tips: host only support <ipaddress>:<ports>
      external_host: 172.16.0.1:9093
```

###  禁用 AlertManager

如果用户环境下已存在 alertmanager 服务，可以在 installer 的 `core_plugins.monitoring.operator.alaertmanager` 中禁用 alertmanager 服务，并配置外部 alertmanager 的`<IP>:<Port>`连接地址。

```yaml
core_plugins:
  details:
    catalog: 监控&告警
    description: KubeGems平台监控&告警控制器,包含Prometheus和AlertManager服务.
    version: v0.50.1-gems
  enabled: true
  namespace: gemcloud-monitoring-system
  operator:
    alertmanager:
      enabled: false
      # If you need to interface to an external alertmanager service, disealed alertmanager and configured the host field
      # Tips: host only support <ipaddress>:<ports>
      external_host: 172.16.0.1:9093
```

:::info 信息
请求外部 prometheus 服务是通过 kubernetes 的 external service 实现的，所以这里只能配置 IP 地址。
:::

### 配置 Recording Rules

KubeGems 内部配置了大量 Prometheus Recording rules 用于提高查询速度。用户需要将这部分 Recording rules配置在自有 Prometheus 服务中。

```yaml
- record: gems_cluster_apiserver_qps
  expr: sum(irate(apiserver_request_total[5m]))by(code)
- record: gems_cluster_apiserver_response_duration_seconds # {verb!~"WATCH|CONNECT"}
  expr: histogram_quantile(0.95, sum(irate(apiserver_request_duration_seconds_bucket[5m])) by (le, verb))
- record: gems_cluster_etcd_qps
  expr: sum(irate(etcd_request_duration_seconds_count[5m]))by(operation)
- record: gems_cluster_etcd_response_duration_seconds
  expr: histogram_quantile(0.95, sum(irate(etcd_request_duration_seconds_bucket[5m])) by (le, operation))

# node cpu
- record: gems_node_cpu_total_cores
  expr: count(sum(node_cpu_seconds_total)by(cpu, host))by(host)
- record: gems_node_cpu_usage_cores
  expr: sum(irate(node_cpu_seconds_total{mode!="idle"}[5m]))by(host)
- record: gems_node_cpu_usage_percent
  expr: (gems_node_cpu_usage_cores / gems_node_cpu_total_cores) * 100
# node memory
- record: gems_node_memory_total_bytes
  expr: sum(node_memory_MemTotal_bytes)by(host)
- record: gems_node_memory_usage_bytes
  expr: sum(node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes)by(host)
- record: gems_node_memory_usage_percent
  expr: (gems_node_memory_usage_bytes / gems_node_memory_total_bytes) * 100
# node storage
- record: gems_node_disk_total_bytes
  expr: max(node_filesystem_size_bytes{device=~"/dev/.*", device!~"/dev/loop\\d+"})by(host, device)
- record: gems_node_disk_usage_bytes
  expr: max(node_filesystem_size_bytes{device=~"/dev/.*", device!~"/dev/loop\\d+"} - node_filesystem_avail_bytes{device=~"/dev/.*", device!~"/dev/loop\\d+"})by(host, device)
- record: gems_node_disk_usage_percent
  expr: (gems_node_disk_usage_bytes / gems_node_disk_total_bytes) * 100
# node io
- record: gems_node_disk_read_iops
  expr: sum(irate(node_disk_reads_completed_total[5m]))by(host)
- record: gems_node_disk_write_iops
  expr: sum(irate(node_disk_writes_completed_total[5m]))by(host)
- record: gems_node_disk_read_bps
  expr: sum(irate(node_disk_read_bytes_total[5m]))by(host)
- record: gems_node_disk_write_bps
  expr: sum(irate(node_disk_written_bytes_total[5m]))by(host)
# node network
- record: gems_node_network_receive_bps
  expr: sum(irate(node_network_receive_bytes_total{device!~"^(cali.+|tunl.+|dummy.+|kube.+|flannel.+|cni.+|docker.+|veth.+|lo.*)"}[5m]))by(host)
- record: gems_node_network_send_bps
  expr: sum(irate(node_network_transmit_bytes_total{device!~"^(cali.+|tunl.+|dummy.+|kube.+|flannel.+|cni.+|docker.+|veth.+|lo.*)"}[5m]))by(host)
- record: gems_node_network_receive_errs_percent
  expr: (irate(node_network_receive_errs_total[5m]) / irate(node_network_receive_packets_total[5m])) * 100
- record: gems_node_network_send_errs_percent
  expr: (irate(node_network_transmit_errs_total[5m]) / irate(node_network_receive_packets_total[5m])) * 100
# node pod
- record: gems_node_running_pod_count
  expr: sum(gems_pod_status{phase="Running"})by(node)
- record: gems_node_running_pod_percent
  expr: (sum(gems_pod_status{phase="Running"})by(node) / sum(kube_node_status_allocatable_pods)by(node)) * 100

# node load
- record: gems_node_load1
  expr: sum(node_load1)by(host)
- record: gems_node_load5
  expr: sum(node_load5)by(host)
- record: gems_node_load15
  expr: sum(node_load15)by(host)
# pod status
- record: gems_pod_status
  expr: |
    sum(kube_pod_status_phase * on(namespace, pod) group_left(host_ip, node, pod_ip) kube_pod_info > 0)
    by(namespace, pod, phase, pod_ip, host_ip, node)
- record: gems_pod_workload
  # deployment的owner_name源于replicaset，带有后缀，全部移除后缀的话会影响ds和sts，所以先加上owner_kind再针对deployment去后缀
  expr: |
    sum(label_replace(label_join(label_replace(kube_pod_owner{job="kube-state-metrics"},"owner_kind", "Deployment", "owner_kind", "ReplicaSet"), "workload",":","owner_kind","owner_name"), "workload","$1","workload","(Deployment:.+)-(.+)"))
    by(namespace, pod, owner_kind, workload)

# container cpu
- record: gems_container_cpu_usage_cores
  expr: |
    sum(irate(container_cpu_usage_seconds_total{pod!="", image!=""}[5m]))by(container, pod, namespace, node)
    * on (namespace, pod) group_left(owner_kind,workload)
    gems_pod_workload
- record: gems_container_cpu_limit_cores
  expr: |
    sum(kube_pod_container_resource_limits_cpu_cores)by(container, pod, namespace, node)
    * on (namespace, pod) group_left(owner_kind,workload)
    gems_pod_workload
- record: gems_container_cpu_usage_percent
  expr: (gems_container_cpu_usage_cores / gems_container_cpu_limit_cores) * 100

# container memory
- record: gems_container_memory_usage_bytes
  expr: |
    sum(container_memory_working_set_bytes{pod!="", image!=""})by(container, pod, namespace, node)
    * on (namespace, pod) group_left(owner_kind,workload)
    gems_pod_workload
- record: gems_container_memory_rss
  expr: |
    sum(container_memory_rss{pod!="", image!=""})by(container, pod, namespace, node)
    * on (namespace, pod) group_left(owner_kind,workload)
    gems_pod_workload
- record: gems_container_memory_limit_bytes
  expr: |
    sum(kube_pod_container_resource_limits_memory_bytes)by(container, pod, namespace, node)
    * on (namespace, pod) group_left(owner_kind,workload)
    gems_pod_workload
- record: gems_container_memory_usage_percent
  expr: (gems_container_memory_usage_bytes / gems_container_memory_limit_bytes) * 100

# container restart
- record: gems_container_restart_times_last_5m
  expr: sum(increase(kube_pod_container_status_restarts_total[5m]))by(namespace, pod, container)

# container network
- record: gems_container_network_receive_bps
  expr: |
    sum(irate(container_network_receive_bytes_total{pod!="", image!=""}[5m]))by(container, pod, namespace, node)
    * on (namespace, pod) group_left(owner_kind,workload)
    gems_pod_workload
- record: gems_container_network_send_bps
  expr: |
    sum(irate(container_network_transmit_bytes_total{pod!="", image!=""}[5m]))by(container, pod, namespace, node)
    * on (namespace, pod) group_left(owner_kind,workload)
    gems_pod_workload

# pvc
- record: gems_pvc_usage_bytes
  expr: sum(kubelet_volume_stats_used_bytes)by(namespace, node, persistentvolumeclaim)
- record: gems_pvc_total_bytes
  expr: sum(kubelet_volume_stats_available_bytes)by(namespace, node, persistentvolumeclaim)
- record: gems_pvc_usage_percent
  expr: (gems_pvc_usage_bytes / gems_pvc_total_bytes) * 100
- record: gems_pvc_inode_total
  expr: sum(kubelet_volume_stats_inodes)by(namespace, node, persistentvolumeclaim)
- record: gems_pvc_inode_used
  expr: sum(kubelet_volume_stats_inodes_used)by(namespace, node, persistentvolumeclaim)

# namespace、environment、project、tenant
- record: gems_namespace_labels
  expr: |
    sum(label_replace(label_replace(label_replace(kube_namespace_labels, "environment","$1", "label_gems_kubegems_io_environment", "(.*)"), "project","$1", "label_gems_kubegems_io_project", "(.*)"), "tenant","$1", "label_gems_kubegems_io_tenant", "(.*)"))
    without(job, label_gems_kubegems_io_environment, label_gems_kubegems_io_project, label_gems_kubegems_io_tenant)
- record: gems_namespace_cpu_usage_cores
  expr: |
    sum(gems_container_cpu_usage_cores)by(namespace)
    * on(namespace) group_left(environment, project, tenant)
    gems_namespace_labels
- record: gems_namespace_memory_usage_bytes
  expr: |
    sum(gems_container_memory_usage_bytes)by(namespace)
    * on(namespace) group_left(environment, project, tenant)
    gems_namespace_labels
- record: gems_namespace_network_receive_bps
  expr: |
    sum(gems_container_network_receive_bps)by(namespace)
    * on(namespace) group_left(environment, project, tenant)
    gems_namespace_labels
- record: gems_namespace_network_send_bps
  expr: |
    sum(gems_container_network_send_bps)by(namespace)
    * on(namespace) group_left(environment, project, tenant)
    gems_namespace_labels
- record: gems_namespace_pvc_usage_bytes
  expr: |
    sum(gems_pvc_usage_bytes)by(namespace)
    * on(namespace) group_left(environment, project, tenant)
    gems_namespace_labels

# cert
- record: gems_cert_expiration_remain_seconds
  expr: sum(certmanager_certificate_expiration_timestamp_seconds - time())by(namespace, name)

# istio
- record: gems_istio_workload_request_qps
  expr: |
    sum(irate(istio_requests_total[5m]))
    without(connection_security_policy, destination_app, destination_canonical_revision, destination_canonical_service, destination_principal, destination_service, instance, job, source_app, source_canonical_revision, source_canonical_service, source_principal)
- record: gems_istio_workload_response_duration_seconds
  expr: |
    histogram_quantile(0.95, sum(irate(istio_request_duration_milliseconds_bucket[5m])) 
    without (connection_security_policy, destination_app, destination_canonical_revision, destination_canonical_service, destination_principal, destination_service, instance, job, source_app, source_canonical_revision, source_canonical_service, source_principal)) 
    / 1000
- record: gems_istio_workload_request_bps
  expr: |
    sum(irate(istio_request_bytes_sum[5m]))
    without(connection_security_policy, destination_app, destination_canonical_revision, destination_canonical_service, destination_principal, destination_service, instance, job, source_app, source_canonical_revision, source_canonical_service, source_principal)
- record: gems_istio_workload_response_bps
  expr: |
    sum(irate(istio_response_bytes_sum[5m]))
    without(connection_security_policy, destination_app, destination_canonical_revision, destination_canonical_service, destination_principal, destination_service, instance, job, source_app, source_canonical_revision, source_canonical_service, source_principal)

# istio gateway
- record: gems_istio_gateway_port_80_downstream_qps
  expr: |
    sum(irate(envoy_http_outbound_0_0_0_0_8080_downstream_rq[5m]))
    by(namespace, pod, response_code_class)
- record: gems_istio_gateway_port_80_downstream_response_duration_seconds
  expr: |
    histogram_quantile(0.95, sum(irate(envoy_http_outbound_0_0_0_0_8080_downstream_rq_time_bucket[5m]))by(namespace, pod, le)) 
    / 1000

- record: gems_istio_gateway_port_443_downstream_qps
  expr: sum(irate(envoy_http_outbound_0_0_0_0_8443_downstream_rq[5m]))by(namespace, pod, response_code_class)
- record: gems_istio_gateway_port_443_downstream_response_duration_seconds
  expr: |
    histogram_quantile(0.95, sum(irate(envoy_http_outbound_0_0_0_0_8443_downstream_rq_time_bucket[5m]))
    by(namespace, pod, le)) / 1000

# observability logging
- record: gems_logging_level_error
  expr: |
    sum(logging_level_error)by(namespace)
    * on(namespace) group_left(label_gems_kubegems_io_environment, label_gems_kubegems_io_project, label_gems_kubegems_io_tenant)
    kube_namespace_labels
- record: gems_eventer
  expr: |
    sum(eventer)by(type,metadata_namespace)
    * on(metadata_namespace) group_left(label_gems_kubegems_io_environment, label_gems_kubegems_io_project, label_gems_kubegems_io_tenant)
    kube_namespace_labels
- record: gems_eventer_component
  expr: |
    sum(eventer_component)by(source_component,metadata_namespace)
    * on(metadata_namespace) group_left(label_gems_kubegems_io_environment, label_gems_kubegems_io_project, label_gems_kubegems_io_tenant)
    kube_namespace_labels
- record: gems_eventer_kind
  expr: |
    sum(eventer_kind)by(involvedObject_kind,metadata_namespace)
    * on(metadata_namespace) group_left(label_gems_kubegems_io_environment, label_gems_kubegems_io_project, label_gems_kubegems_io_tenant)
    kube_namespace_labels
```
