

resource "aws_security_group" "allow_http" {
  name        = "allow_http"
  description = "Allow http"
  vpc_id      = "vpc-1ddfe775"

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
   ingress {
    description = "Jenkins"
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "Nodejs"
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow_http"
  }
}

resource "aws_instance" "nodebackend"{
  ami="ami-0447a12f28fddb066"
  instance_type="t2.micro"
  key_name="new"
  security_groups=["allow_http"]
  
  connection {
    type="ssh"
    user="ec2-user"
    private_key=file("C:/Users/dhruv/Downloads/AWS_KEYS/new.pem")
    host=aws_instance.web.public_ip
  }

  provisioner "remote-exec" {
    inline=[
       "sudo yum install nodejs -y",
       "npm install nodemon -y",
       "yum install git -y",
       "git clone https://github.com/dhruvrawat777/URL_Shortener.git",
    ]
  }
  tags={
    Name="dhruv"
  }
}


output "myos_ip"{
  value=aws_instance.web.public_ip
}


resource "null_resource" "nullremote3"{
  
  depends_on=[aws_volume_attachment.ebs_att,]

  connection{
    type="ssh"
    user="ec2-user" 
    private_key=file("C:/Users/HP/Downloads/AWS_KEYS/new.pem")
    host=aws_instance.web.public_ip
  }
  provisioner "remote-exec"{
    inline=[
      "sudo mkfs.ext4 /dev/xvdh",
      "sudo mount /dev/xvdh /var/www/html",
      "sudo rm -rf /var/www/html/* ",
      "sudo git clone https://github.com/dhruvrawat777/multicloud.git /var/www/html",
      "sudo mkdir /code/",
      "sudo git clone https://github.com/Moiz-Ali-Moomin/MLSecOps.git /code/",
     "sudo cat /var/lib/jenkins/secrets/initialAdminPassword",
    ]
  }
}

resource "null_resource" "nulllocal1"{
  depends_on=[null_resource.nullremote3,]

   provisioner "local-exec"{
     command="start chrome ${aws_instance.web.public_ip}"
    }
}




