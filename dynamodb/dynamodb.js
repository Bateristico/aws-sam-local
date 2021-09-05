/**
 * script to create the dynamodb table once the docker container is up and running
 * aws dynamodb create-table --table-name Pets --attribute-definitions AttributeName=PetKey,AttributeType=S
 * --key-schema AttributeName=PetKey,KeyType=HASH
 * --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --endpoint-url http://localhost:8000
 */

// aws dynamodb create-table --table-name Pets --attribute-definitions AttributeName=PetKey,AttributeType=S --key-schema AttributeName=PetKey,KeyType=HASH --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --endpoint-url http://localhost:8000
// aws dynamodb put-item --table-name Pets --item '{ "PetKey": {"S": "1"}, "name": {"S": "Mirka"}}' --return-consumed-capacity TOTAL --endpoint-url http://localhost:8000
// aws dynamodb put-item --table-name Pets --item '{ "PetKey": {"S": "2"}, "name": {"S": "Lonia"}}' --return-consumed-capacity TOTAL --endpoint-url http://localhost:8000
// aws dynamodb put-item --table-name Pets --item '{ "PetKey": {"S": "3"}, "name": {"S": "Laika"}}' --return-consumed-capacity TOTAL --endpoint-url http://localhost:8000
