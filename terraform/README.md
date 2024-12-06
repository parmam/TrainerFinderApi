# TrainerFinder Infrastructure

This directory contains the Terraform configuration for deploying the TrainerFinder application infrastructure on AWS.

## Architecture Overview

The infrastructure consists of:

- VPC with public and private subnets across 2 availability zones
- RDS PostgreSQL database in private subnets
- EC2 instances in private subnets running the application in Docker containers
- Application Load Balancer in public subnets
- ElastiCache Redis cluster in private subnets
- S3 bucket for file storage
- IAM roles and security groups
- Auto Scaling Group for EC2 instances

## Prerequisites

1. AWS CLI installed and configured
2. Terraform installed (version >= 1.0.0)
3. S3 bucket for Terraform state (specified in main.tf)
4. SSL certificate in AWS Certificate Manager
5. Domain name configured in Route 53 (optional)

## Getting Started

1. Copy the example variables file:

   ```bash
   cp terraform.tfvars.example terraform.tfvars
   ```

2. Edit terraform.tfvars with your values:

   - aws_region: Your preferred AWS region
   - environment: dev, staging, or prod
   - vpc_cidr: CIDR block for the VPC
   - db_username: RDS admin username
   - db_password: RDS admin password
   - domain_name: Your domain name
   - certificate_arn: ARN of your SSL certificate

3. Initialize Terraform:

   ```bash
   terraform init
   ```

4. Plan the deployment:

   ```bash
   terraform plan
   ```

5. Apply the configuration:
   ```bash
   terraform apply
   ```

## Environment-Specific Configurations

The infrastructure can be deployed to different environments (dev, staging, prod) by changing the `environment` variable. Key differences between environments:

### Development

- Single AZ for RDS
- Smaller instance types
- No Multi-AZ deployment
- Minimal backup retention

### Staging

- Similar to production but with smaller instances
- Shorter backup retention
- Less strict scaling policies

### Production

- Multi-AZ RDS deployment
- Larger instance types
- Strict backup policies
- More aggressive scaling

## Security Notes

1. Never commit terraform.tfvars to version control
2. Use strong passwords for RDS
3. Regularly rotate access keys
4. Keep all components in private subnets except the ALB
5. Enable encryption at rest for sensitive data

## Maintenance

1. Regularly update provider versions
2. Monitor and adjust Auto Scaling policies
3. Review security group rules
4. Check for unused resources
5. Monitor costs and optimize where possible
