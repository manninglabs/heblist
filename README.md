# heblist

> A Vue.js project

## Localhost Setup

1. Install Ansible. Ensure installed via `ansible --version`
2. Install 3rd party roles: `ansible-galaxy install -r requirements.yml`

## Deploy

```
cd deploy
ansible-playbook -i inventories/production ansible.yml
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
