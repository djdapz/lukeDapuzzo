#!/usr/bin/env sh

#################
## push server ##
#################

pushd repo
    cf login api.run.pivotal.io -s development -u $PCF_USERNAME -p $PCF_PASSWORD
    ./gradlew clean test bootRepackage
    cf push -p build/libs/lukeDapuzzo-0.0.1-SNAPSHOT.jar

#################
## push client ##
#################

    pushd client
        cf login api.run.pivotal.io -s development -u $PCF_USERNAME -p $PCF_PASSWORD
        npm run build
        cf push -f ../ci/manifests/dev/client-manifest.yml
    popd
popd