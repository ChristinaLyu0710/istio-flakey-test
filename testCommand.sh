g=0; for n in $(gsutil ls {gs://istio-circleci/master/test-integration-kubernetes/*/artifacts/junit.xml,gs://istio-prow/logs/e2e-simpleTests-master/*/artifacts/junit.xml}); do foo=$(cut -d "," -f 2 <<< $(cut -d ":" -f 2 <<< $(gsutil stat $n | sed -n 3p))); gsutil cp $n "gs://istio-flakey-test/temp2/out-$foo-$g.xml"; ((++g)); done
