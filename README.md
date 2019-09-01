[![Build Status](https://api.travis-ci.org/mallgroup/mal-mongster.svg?branch=master)](https://travis-ci.org/mallgroup/mal-mongster)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=danielrataj_mal-mongster&metric=alert_status)](https://sonarcloud.io/dashboard?id=danielrataj_mal-mongster)

<img src="/admin/src/assets/logo-512x512.png" alt="logo" width="150" height="150" align="right"
 />

# Mongster

Now you can easily connect your nodes with Mongo DB into one cluster within control panel. Imagine all of the options you get:

-   Control Panel for clusters with simple UI.
-   Replica sets within a few clicks.
-   Adding primary, secondary or arbiter server as well.
-   Increase / decrease priority, enable/disable voting on the Mongo.
-   Restart Docker container.
-   Create a database, manage users.

We believe that security is essential.

-   So every password or SSH key is also encrypted.
-   It is entirely up to you where you store application data.

## Prerequisities

You need GIT and [Docker](https://www.docker.com/) installed on your computer, both up to date.

## Clone repository
Clone the master branch and switch the branch to the latest tag.

```sh
git clone git@github.com:mallgroup/mal-mongster.git
cd mal-mongster
git checkout tags/v1.0.1 -b v1.0.1
```

## Run Docker Compose

Run all Docker containers on the background at once.

```sh
docker-compose down && docker-compose up -d
```

Admin panel appears on URL <http://localhost:8080>

### Database

Mongster uses custom MongoDB to store all data. The database data directory is placed in Docker volume that is created on startup. So in case you, remove all volumes you also lose data you stored into this database. So it is highly recommended to mount data directory somewhere else.

#### Change volumes

In case you remove volumes, you also lose the data you saved earlier. So it might be useful to map Mongo volume to some other location on your disk.

Open [docker-compose.yml](/docker-compose.yml) file and replace this line:

```yaml
volumes:
  - mongodb_data:/bitnami
```

with content like:

```yaml
volumes:
  - ./my_local_db_folder:/bitnami
```

You can replace `./my_local_db_folder` with the directory you expect the Mongo stores the data.

### Local development

You also might be interested in local development. We'll appreciate any code that makes this product just better.

-   [Local Development](/docs/development.md)

* * *

## FAQ

We recommend to visit [FAQ page](/FAQ.md).

* * *

## Sponsors

-   [MALL Group](http://www.mallgroup.com)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

This project is licensed under the **[MIT license](http://opensource.org/licenses/mit-license.php)** - see the [LICENSE.md](/LICENSE.md) file for details.
