pipeline {
    agent {
        docker {
      image:'node:latest'
        }
    }

    // Define tools to be installed
    tools {
        // Install Node.js tool with a specific version
        nodejs 'nodejs'
    }

    environment {
    JWT_SECRET = 'TestSecreaTKey'
    MONGO_URI = 'mongodb+srv://jimmyptl46:jimmyptl46@cluster0.zct2z4b.mongodb.net/?retryWrites=true&w=majority'
    }
    stages {
        stage('Checkout') {
      steps {
        // Check out the repository from GitHub
        git 'https://github.com/jimmyptl-jer/RealEstateProject-MERN.git'
      }
        }

        stage('Install Client Dependencies') {
      steps {
        // Change to the client directory and install dependencies
        dir('client') {
          sh 'npm install'
        }
      }
        }

        stage('Build Client') {
      steps {
        // Change to the client directory and run the build command
        dir('client') {
          sh 'npm run build'
        }
      }
        }

        stage('Install Backend Dependencies') {
      steps {
        // Change to the backend directory and install dependencies
        dir('api') {
          sh 'npm install'
          sh 'export MONGODB_URI=$MONGODB_URI'
          sh 'export TOKEN_KEY=$TOKEN_KEY'
        }
      }
        }
    }

    post {
        success {
      echo 'Pipeline completed successfully!'
        }
        failure {
      echo 'Pipeline failed.'
        }
    }
}
