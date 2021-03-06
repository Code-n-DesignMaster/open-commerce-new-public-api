#!/bin/bash

TOKEN=$1

generate_post_data()
{
  cat <<EOF
{
  "BITBUCKET_CI": "$CI",
  "BITBUCKET_BOOKMARK": "$BITBUCKET_BOOKMARK",
  "BITBUCKET_BRANCH": "$BITBUCKET_BRANCH",
  "BITBUCKET_BUILD_NUMBER": "$BITBUCKET_BUILD_NUMBER",
  "BITBUCKET_CLONE_DIR": "$BITBUCKET_CLONE_DIR",
  "BITBUCKET_COMMIT": "$BITBUCKET_COMMIT",
  "BITBUCKET_DEPLOYMENT_ENVIRONMENT": "$BITBUCKET_DEPLOYMENT_ENVIRONMENT",
  "BITBUCKET_DEPLOYMENT_ENVIRONMENT_UUID": "$BITBUCKET_DEPLOYMENT_ENVIRONMENT_UUID",
  "BITBUCKET_EXIT_CODE": "$BITBUCKET_EXIT_CODE",
  "BITBUCKET_GIT_HTTP_ORIGIN": "$BITBUCKET_GIT_HTTP_ORIGIN",
  "BITBUCKET_GIT_SSH_ORIGIN": "$BITBUCKET_GIT_SSH_ORIGIN",
  "BITBUCKET_PARALLEL_STEP": "$BITBUCKET_PARALLEL_STEP",
  "BITBUCKET_PARALLEL_STEP_COUNT": "$BITBUCKET_PARALLEL_STEP_COUNT",
  "BITBUCKET_PR_DESTINATION_BRANCH": "$BITBUCKET_PR_DESTINATION_BRANCH",
  "BITBUCKET_PR_ID": "$BITBUCKET_PR_ID",
  "BITBUCKET_PROJECT_KEY": "$BITBUCKET_PROJECT_KEY",
  "BITBUCKET_PROJECT_UUID": "$BITBUCKET_PROJECT_UUID",
  "BITBUCKET_REPO_FULL_NAME": "$BITBUCKET_REPO_FULL_NAME",
  "BITBUCKET_REPO_OWNER": "$BITBUCKET_REPO_OWNER",
  "BITBUCKET_REPO_OWNER_UUID": "$BITBUCKET_REPO_OWNER_UUID",
  "BITBUCKET_REPO_SLUG": "$BITBUCKET_REPO_SLUG",
  "BITBUCKET_REPO_UUID": "$BITBUCKET_REPO_UUID",
  "BITBUCKET_STEP_RUN_NUMBER": "$BITBUCKET_STEP_RUN_NUMBER",
  "BITBUCKET_STEP_TRIGGERER_UUID": "$BITBUCKET_STEP_TRIGGERER_UUID",
  "BITBUCKET_TAG": "$BITBUCKET_TAG",
  "NPM_TOKEN": "$NPM_TOKEN"
}
EOF
}

curl -iv \
--fail \
-H "Accept: application/json" \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type:application/json" \
-X POST --data "$(generate_post_data)" "https://jenkins-ocp.stuzo.net/generic-webhook-trigger/invoke"
