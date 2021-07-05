# Smart search

## **How to deploy the application**

First, pull source code

```
git pull https://github.com/GundlackFelixDEV/pdf_keyword_APP.git
```

Then, pull the source of all the submodules.
To do so, move in the folder of the project and execute these commands :

```
git submodule init
git submodule update
```

Finally, we can launch the project thanks to the docker-compose command :

```
docker-compose up -d
```

The application is available on **localhost**.

## **APIs**

## Environments
|API|Description|
|--|--|
|``/sklearn``| **NLP Service** using Sklearn e.g. Keyword Analytics, Text Similarity|
|``/transformers``| **NLP Service** using Transformers e.g. Keyword Analytics, Text Similarity|
|``/pdf`` | **PDF Service** e.g. Textextraction from PDF |
|``/wiki`` | **WIKI Service** e.g. Random text from <a href="https://en.wikipedia.org/api/rest_v1/">Wikipedia API</a> |


### Endpoints
#### ``/sklearn``
| Method | API | Description|
|--|--|--|
|GET|``/keywords``| HTML with form to input text corpus |
|POST|``/keywords``| Keyword analysis from text corpus |

#### ``/transformers``
| Method | API | Description|
|--|--|--|
*InWork*

#### ``/pdf``
| Method | API | Description|
|--|--|--|
|GET|``/``|Redirect to ``/upload``|
|GET|``/upload``|HTML with form to upload PDF file|
|POST|``/upload``|Save PDF on Server and redirect to ``/info/<name>``|
|GET|``/info/<name>``|HTML with text from PDF|
|GET|``/uploads/<name>``|Download pdf |

#### ``/wiki``
| Method | API | Description|
|--|--|--|
*InWork*