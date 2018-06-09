# aws-ecs-demo
Demonstrate how to deploy a docker compose to ECS

## AWS ECS deployment

ECR: Elatic container registry: AWS' private image repo

Task definition: blueprint so EC2 knows which image to use in containers, how many containers to use in that task, and resource allocation

Service: launches and maintains copies of task definitions; auto recover stopped tasks and maintain # of copies

ELB: Elastic load balancing distributes traffic across container instances your task is launched on

IAM: Identity access management defines user priviledges

Cluster: tasks run on a cluster; a set of container instances running the AWS container agent
- config: name, type (e.g. t2.micro), number of instances, key pair (allows SSH access to instance)


## Questions

How do services like influx, rabbitmq, etc. have hostnames like http://influxdb? Hosts file, internal to service in /etc dir?

## Setup

1. Create cluster
2. Push images to ECR
3. Add service to cluster
4. Add containers to service. One service can contain many containers, akin to a docker compose
5. Load balance containers (?)