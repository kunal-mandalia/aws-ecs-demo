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
