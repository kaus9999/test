# Sobre os projetos e arquivos:

* backend - projeto em spring, dentro dele encontrará o arquivos Dockerfile para montar a imagem
* frontend - projeto em react, dentro dele encontrará o arquivo Dockerfile para montar a imagem
* compose.yml -  um exemplo de arquivo de docker compose para uso, configurar volumes são recomendados

# Sobre como criaria a pipelina:

Para criar a pipeline, criaria o arquivo .github/workflows/prod.yml, iria inserir as actions necessárias para compilação e deploy neste arquivo

# Qualidade

Iria criar uma pipeline com sonarqube, em cada pr aberto, necessita corrigir e passar pelo sonar quality

# Requisitos

* NodeJS LTS - última versão
* Java 17 ou superior
* Docker
* Docker Compose

# Como controlaria as tarefas

1. Criar branch a partir da homolog
2. O nome é precedido por feature ou hotfix, etc / nome da branch fork / código da tarefa
3. Cria um PR quando concluir da sua branch a branch de destino
4. PR passa por review
5. Aprovado faz merge na branch
6. Inicialmente tem 2 branches principais a Main e Homolog, onde cada um corresponde e passa pelos mesmos processos
7. Somente a branch master pode receber hotfix ou bugfix diretos
8. Os commits devem conter a númeração da tarefa obrigatoriamente
