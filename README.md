# Sobre os projetos e arquivos:

* backend - projeto em spring, dentro dele encontrará o arquivos Dockerfile para montar a imagem
* frontend - projeto em react, dentro dele encontrará o arquivo Dockerfile para montar a imagem
* compose.yml -  um exemplo de arquivo de docker compose para uso, configurar volumes são recomendados

# Sobre como criaria a pipelina:

Para criar a pipeline, criaria o arquivo .github/workflows/prod.yml, iria inserir as actions necessárias para compilação e deploy neste arquivo

# Qualidade

Iria criar uma pipeline com sonarqube

# Requisitos

* NodeJS LTS - última versão
* Java 17 ou superior
* Docker
* Docker Compose

