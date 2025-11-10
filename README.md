# AWS Full Stack App with Load Balancer
- Frontend: React (Nginx)
- Backend: Node + Express
- Dockerized, ready for ECR + ECS + ALB

Steps:
1. Build & push images to AWS ECR
2. Create ALB with two target groups (frontend:80, backend:5000) or route backend internally
3. Use ecs-task-def.json for ECS Fargate service
