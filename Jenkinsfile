pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        echo 'stage Test'
      }
    }
    stage('Deploy') {
      steps {
        echo 'stage Deploy'
      }
    }
  }
  post {
    always {
      echo 'post always'
    }
    success {
      echo 'post success'
    }
    failure {
      echo 'post failure'
    }
    unstable {
      echo 'post unstable'
    }
  }
}