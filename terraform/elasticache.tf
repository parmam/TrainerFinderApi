resource "aws_elasticache_subnet_group" "main" {
  name       = "${var.environment}-cache-subnet-group"
  subnet_ids = aws_subnet.private[*].id

  tags = {
    Name = "${var.environment}-cache-subnet-group"
  }
}

resource "aws_security_group" "elasticache" {
  name        = "${var.environment}-elasticache-sg"
  description = "Security group for ElastiCache Redis"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port       = 6379
    to_port         = 6379
    protocol        = "tcp"
    security_groups = [aws_security_group.ec2.id]
  }

  tags = {
    Name = "${var.environment}-elasticache-sg"
  }
}

resource "aws_elasticache_cluster" "main" {
  cluster_id           = "${var.environment}-cache"
  engine              = "redis"
  node_type           = "cache.t3.micro"
  num_cache_nodes     = 1
  parameter_group_name = "default.redis7"
  port                = 6379
  security_group_ids  = [aws_security_group.elasticache.id]
  subnet_group_name   = aws_elasticache_subnet_group.main.name

  tags = {
    Name = "${var.environment}-cache"
  }
} 