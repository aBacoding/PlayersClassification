**Report**

Abdurakhim Bakytzhan 

Astana IT University 

IT-2106 

Advanced Programming 

Yeleu Sultanmurat 

Astana, 2023 

Github link:[ https://github.com/aBacoding/PlayersClassification.git ](https://github.com/aBacoding/PlayersClassification.git)

YouTube video link:[ https://youtu.be/YqCU-kOthqo ](https://youtu.be/YqCU-kOthqo)

**Introduction** 

- **Problem:** The main problem was creating a web application about the CS:GO gaming news website with built-in image classification for face recognition of 5-star players: device, electronic, NiKo, s1mple, ZywOo. 
- **Literature review with links:** 
1. [https://www.youtube.com/watch?v=uqomO_BZ44g ](https://www.youtube.com/watch?v=uqomO_BZ44g)

In this video, the author makes a classification between emotions (happy and sad). By this video I understood how to work with my own created dataset and make predictions. 

2. [https://www.youtube.com/watch?v=m1dQ38qDABw ](https://www.youtube.com/watch?v=m1dQ38qDABw)
2. [https://www.youtube.com/watch?v=kwKfWBb6frs ](https://www.youtube.com/watch?v=kwKfWBb6frs)

Thanks to these videos, I understood how to collect images for a dataset and how to clean them.  

4. [https://www.tensorflow.org/tutorials/images/cnn?hl=ru ](https://www.tensorflow.org/tutorials/images/cnn?hl=ru)

In the official Tensorflow website above, I learned how to use CNN (Convolutional layers) correctly in the model. 

5. [https://medium.com/ymedialabs-innovation/data-augmentation- techniques-in-cnn-using-tensorflow-371ae43d5be9 ](https://medium.com/ymedialabs-innovation/data-augmentation-techniques-in-cnn-using-tensorflow-371ae43d5be9)

This article above contains all the important information about data augmentation usage. After reading them, I realized how data augmentation can affect photos in the training set  

- **Current work (description of the work):**  

My current work consisted of: 

1) Creating the frontend part of the project (HTML/CSS/Bootstrap/JS) 
1) Creating the backend part of the project (Node.js/Express.js) 
3) Creating the main part of a machine learning project (create, train and save a model using Tensorflow, then convert this my\_model.h5 file into model.json to use Tensorflow.js on the website) 

**Data and Methods** 

- **Information about the data (probably analysis of the data with some visualization):** 

Link to my dataset for preview:  [https://drive.google.com/drive/folders/1Bq9DUWtPcT2VREyb- Nj7CRe2lDByjrGy?usp=share_link ](https://drive.google.com/drive/folders/1Bq9DUWtPcT2VREyb-Nj7CRe2lDByjrGy?usp=share_link)

To train the model, I created my dataset with an image of 5 players (100 images for each, 50 for training and 50 for validation) (pic. 1). Thanks to the website[ hltv.org ](https://www.hltv.org/)I downloaded most of the images and cleaned them (cropped the faces from the image, tried to take only high-quality images), and thanks to[ google images,](https://images.google.com/) I supplemented my dataset with different photos so that they would not be duplicated. 

![(Aspose.Words.e9a466b0-9c76-491c-9c37-1cbdaddbb228.002.png)](https://user-images.githubusercontent.com/97093590/220779583-fa4a6798-ed9d-45a4-8f9c-8fa252262290.png)

**Pic. 1.Setting the image size to 250 and batch size to 32, also creating my own dataset of 500 images** 

After I trained the model, I displayed accuracy (pic. 2) and loss (pic. 3) graphs for a clear example of how data augmentation helps to prevent overfitting. 

![Aspose Words e9a466b0-9c76-491c-9c37-1cbdaddbb228 003](https://user-images.githubusercontent.com/97093590/220779523-d9d921fc-1e63-4872-bfc8-96be6953ed95.png)

**Pic. 2.Train accuracy and validation accuracy of the model** 

![Aspose Words e9a466b0-9c76-491c-9c37-1cbdaddbb228 004](https://user-images.githubusercontent.com/97093590/220779639-d34e0628-da82-48fb-a66c-7b651882133a.png)

**Pic. 3.Train loss and validation loss of the model** 

I also want to mention that I used data augmentation in order to prevent overfitting, because I really don't have a huge amount of images in the dataset (pic. 4). 

![Aspose Words e9a466b0-9c76-491c-9c37-1cbdaddbb228 005](https://user-images.githubusercontent.com/97093590/220779664-41c14e42-fe10-4b6a-a459-409ed892f866.png)

**Pic. 4.Data augmentation** 

- **Description of the ML models you used with some theory** 

I used a sequential model with 4 Convolutional layers, Flatten layer, dropout to prevent overfitting, fully connected dense layer and output dense layer (pic. 5). 

![Aspose Words e9a466b0-9c76-491c-9c37-1cbdaddbb228 006](https://user-images.githubusercontent.com/97093590/220779692-f8f474fa-5f3e-45fe-aa3b-7aa5e031b763.png)

**Pic. 5.Sequential model in my project** 

As I mentioned in my project idea proposal, I will take the one image of the professional CS:GO player and will recognize the image by using CNN architecture. For do that, the image will be the input layer, then pass by the convolutional and pooling layers. This stage is called – Feature Extraction. Finally, it will pass from the fully connected layers and output the results of predictions. This stage is called – Classification. The all hidden layers are “ReLU” activation function and the output layer is “softmax” instead of “sigmoid” because there are more than 2 classes. Also I mentioned about dropout technique that randomly drops neurons for prevent overfitting.  

**Results** 

As a result I would like to show how the model works on my website that I developed for this project. The classes have adopted indexes: {0: 'device', 1: 'electronic', 2: 'NiKo', 3: 's1mple', 4: 'ZywOo'}.Referring to this information, the prediction of the “s1mple” (pic. 6), the prediction of the “NiKo” (pic. 7), the prediction of the “device” (pic. 8), the prediction of the “ZywOo” (pic. 9), the prediction of the “electronic” (pic. 10). 

![Aspose Words e9a466b0-9c76-491c-9c37-1cbdaddbb228 007](https://user-images.githubusercontent.com/97093590/220779730-386b0456-5830-46e4-a547-ad651fe3999d.png)

**Pic. 6.Classification by the “s1mple” face** 

![Aspose Words e9a466b0-9c76-491c-9c37-1cbdaddbb228 008](https://user-images.githubusercontent.com/97093590/220779753-f14573e1-02a7-4e42-8abc-029d2f60b4d7.png)

**Pic. 7.Classification by the “NiKo” face** 

![Aspose Words e9a466b0-9c76-491c-9c37-1cbdaddbb228 009](https://user-images.githubusercontent.com/97093590/220779788-a579edcf-6c4a-4aff-b072-8e50240b7e64.png)

**Pic. 8.Classification by the “device” face** 

![Aspose Words e9a466b0-9c76-491c-9c37-1cbdaddbb228 010](https://user-images.githubusercontent.com/97093590/220779820-ff69a344-67a9-4aba-a448-048c5b06df7e.png)

**Pic. 9.Classification by the “ZywOo” face** 

![Aspose Words e9a466b0-9c76-491c-9c37-1cbdaddbb228 011](https://user-images.githubusercontent.com/97093590/220779848-4c14df24-8750-417f-bbda-8dba769a143b.jpeg)

**Pic. 10.Classification by the “electronic” face** 

**Discussion** 

In general, I am very pleased with the result for the first time working with machine learning. It was a huge and at the same time interesting experience that will give me the confidence to continue working on the project. In the future, I want to increase the number of players to 10, then to 20 and gradually expand the amount of data for the development of the project as one of my successful ones in the portfolio. 

**Sources** 

YouTube videos: 

1. [https://www.youtube.com/watch?v=uqomO_BZ44g ](https://www.youtube.com/watch?v=uqomO_BZ44g)
1. [https://www.youtube.com/watch?v=m1dQ38qDABw ](https://www.youtube.com/watch?v=m1dQ38qDABw)
1. [https://www.youtube.com/watch?v=kwKfWBb6frs ](https://www.youtube.com/watch?v=kwKfWBb6frs)

Official Tensorflow website:** 

4. [https://www.tensorflow.org/tutorials/images/cnn?hl=ru ](https://www.tensorflow.org/tutorials/images/cnn?hl=ru)
4. [https://www.tensorflow.org/js/tutorials/conversion/import_keras?hl=ru ](https://www.tensorflow.org/js/tutorials/conversion/import_keras?hl=ru)

Medium forum: 

6. [https://medium.com/ymedialabs-innovation/data-augmentation-techniques- in-cnn-using-tensorflow-371ae43d5be9 ](https://medium.com/ymedialabs-innovation/data-augmentation-techniques-in-cnn-using-tensorflow-371ae43d5be9)

HLTV (Half-life TV) official website: 

7. [https://www.hltv.org/galleries ](https://www.hltv.org/galleries)

Google Images: 

7. [https://images.google.com/ ](https://images.google.com/)

Starter code from the Github: 

9. [https://github.com/tensorflow/tfjs-examples/tree/master/mobilenet ](https://github.com/tensorflow/tfjs-examples/tree/master/mobilenet)
9. [https://github.com/fchollet/deep-learning-with-python- notebooks/blob/master/first_edition/5.2-using-convnets-with-small- datasets.ipynb ](https://github.com/fchollet/deep-learning-with-python-notebooks/blob/master/first_edition/5.2-using-convnets-with-small-datasets.ipynb)

Starter code from the Google Drive: 

11. [https://drive.google.com/drive/folders/1g8R9Ca4vnQuiEZrO4j6W7wnDkp Kn0Srx ](https://drive.google.com/drive/folders/1g8R9Ca4vnQuiEZrO4j6W7wnDkpKn0Srx)
