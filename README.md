IEEE PAPER link:https://ieeexplore.ieee.org/document/10796798/
### Project Overview:
This project focuses on using deep learning techniques to classify electrocardiogram (ECG) images for the diagnosis of cardiovascular diseases. The dataset comprises ECG images belonging to four distinct classes:


1. **ECG Images of Myocardial Infarction Patients**
2. **ECG Images of Patients with abnormal heartbeat**
3. **ECG Images of Patients with a history of MI**
4. **Normal Person ECG Images**
### DATASET link: https://data.mendeley.com/datasets/gwbz3fsgp8/2

### Preprocessing:
Before training the models, we performed preprocessing steps to enhance the quality of the ECG images. These steps included cropping to remove irrelevant edges and removing gridlines for better clarity. While normalization was considered, it wasn't included in this particular implementation.

#### SAMPLE IMAGE:

  ![test (1)](https://github.com/krishna-akula2003/Deep-Learning-Approaches-for-ECG-Image-Classification-in-Cardiovascular-Disease-Diagnosis/assets/138143431/9a026b87-c379-4e19-ad98-154039bcd813)


### CROPPING IMAGE:

   ![image](https://github.com/krishna-akula2003/Deep-Learning-Approaches-for-ECG-Image-Classification-in-Cardiovascular-Disease-Diagnosis/assets/138143431/4094c4ff-3ae3-4202-847e-f2f88a0f29c6)


### GRAYSCALED IMAGE:

  ![image](https://github.com/krishna-akula2003/Deep-Learning-Approaches-for-ECG-Image-Classification-in-Cardiovascular-Disease-Diagnosis/assets/138143431/bb91ffc4-74ff-42df-949d-29861cfd3333)


### MODEL IMPLEMENTATION:

We employed state-of-the-art Convolutional Neural Network (CNN) models, specifically:
- **VGG16**
- **Xception**
- **DenseNet**

These models were trained on the preprocessed ECG image dataset to learn discriminative features that could aid in classification.

### Feature Matrix Extraction:
From the trained CNN models, we extracted feature matrices. These matrices encapsulate the salient features of the ECG images, which are crucial for subsequent classification tasks.

### Classifier Implementation:
Using the extracted feature matrices, we implemented various classifiers, including:
- **Perceptron**
- **Naive Bayes and other classifiers**  

These classifiers were trained on the feature matrices to learn the underlying patterns and relationships in the data.

### Conclusion:
Xception model acheived 98 percent acccuracy.

FUTURE WORK:
IMPLEMENTING AN WEB BASED APPLICATION
