<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                /* align-items: center; */
                margin-top: 2em;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .usage {
                list-style: none;
                width: 50%;
                margin: auto;
                padding: 0;
            }

            .usage_step {
                margin-top: 2em;
                border: 3px solid gray;
                border-radius: 5px;
            }

            .usage_step h3 {
                border-bottom: 1px solid darkgray;
                padding-bottom: 1em;
            }

            .usage_step p, li {
                color: gray;
                font-weight: bold;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div class="title m-b-md">
                    Welcome to the API for Akademiska hus API
                </div>

                <h2>Usage</h2>
                <ul class="usage">
                    <li class="usage_step">
                        <h3>Endpoint</h3>
                        <p>The API starts at endpoint /api/</p>
                    </li>
                    <li class="usage_step">
                        <h3>Allowed paths</h3>
                        <p>
                            <ul>
                                <li>/issue: Get an object containing an array of all issues.</li>
                                <li>/news: Get an object containing an array of all news.</li>
                                <li>/campus: Get an object containing an array of all campuses.</li>
                                <li>/user: Get an object containing an array of all users.</li>
                            </ul>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </body>
</html>
