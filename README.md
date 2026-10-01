# 🛒 Supermarket Predictor

A Machine Learning project that predicts the most suitable supermarket
for a customer based on personal, financial, and shopping-related
factors. The project also includes an interactive dashboard for entering
customer details and viewing prediction results.

## 📌 Project Overview

The **Supermarket Predictor** is designed to explore how customer
characteristics and purchasing-related factors can be used to predict a
suitable supermarket choice.

The prediction model uses features such as:

-   Age
-   Gender
-   Monthly Income (LKR)
-   Family Size
-   Residential Area
-   Monthly Budget (LKR)
-   Shopping Frequency
-   Transport Preference

The project covers the complete Machine Learning workflow, from data
cleaning and exploratory analysis to model training, comparison, and
deployment through a dashboard.

## 🎯 Objectives

-   Analyze customer and supermarket-related data.
-   Clean and prepare the dataset for Machine Learning.
-   Identify useful customer features for supermarket prediction.
-   Train multiple classification models.
-   Compare model performance.
-   Select and save the best-performing model.
-   Provide predictions through an easy-to-use dashboard.

## 🧠 Machine Learning Models

The following classification algorithms were developed and evaluated:

1.  **Decision Tree**
2.  **K-Nearest Neighbors (KNN)**
3.  **Logistic Regression**
4.  **Support Vector Machine (SVM)**

The models were compared using classification accuracy. In the project
evaluation, the SVM model achieved the highest recorded accuracy among
the tested models and was saved as the final model for prediction.

## 📊 Model Comparison

  Model                            Accuracy
  ------------------------------ ----------
  Decision Tree                      19.61%
  K-Nearest Neighbors (KNN)          23.53%
  Logistic Regression                19.61%
  Support Vector Machine (SVM)       24.51%

> Note: The reported accuracy values are based on the evaluation
> performed in the project notebook.

## 📈 Project Workflow

``` text
Raw Dataset
     ↓
Data Cleaning
     ↓
Data Preparation
     ↓
Exploratory Data Analysis
     ↓
Feature Selection
     ↓
Train/Test Split
     ↓
Model Training
     ↓
Model Evaluation
     ↓
Model Comparison
     ↓
Best Model Selection
     ↓
Supermarket Prediction Dashboard
```

## 🖥️ Dashboard

An interactive dashboard was developed to make the prediction system
easier to use.

Users can provide relevant customer information such as:

-   Monthly budget
-   Monthly income
-   Family size
-   Residential area
-   Shopping frequency
-   Transport preference
-   Other customer attributes

The trained Machine Learning model then predicts the supermarket based
on the provided information.

## 🗂️ Project Structure

``` text
Supermarket_Predictor/
│
├── models/
│   └── best_supermarket_model.pkl
│
├── static/
│   └── Dashboard assets
│
├── templates/
│   └── Dashboard HTML templates
│
├── app.py
├── SuperMarket.ipynb
├── supermarket_data.csv
├── .gitignore
└── README.md
```

## 🛠️ Technologies Used

-   **Python**
-   **Pandas**
-   **NumPy**
-   **Scikit-learn**
-   **Jupyter Notebook**
-   **Machine Learning**
-   **HTML/CSS**
-   **Dashboard / Web Application**

## 📚 Key Learning Outcomes

This project provided practical experience in:

-   Data preprocessing and cleaning
-   Exploratory Data Analysis (EDA)
-   Feature selection
-   Classification algorithms
-   Model training and evaluation
-   Comparing Machine Learning models
-   Saving and loading trained models
-   Building a prediction dashboard
-   Integrating Machine Learning with a web application

## 🚀 Getting Started

### 1. Clone the repository

``` bash
git clone https://github.com/Kaushalya04/Supermarket_Predictor.git
cd Supermarket_Predictor
```

### 2. Install the required Python packages

``` bash
pip install pandas numpy scikit-learn flask
```

If additional packages are required by the application, install them
according to the imports in `app.py`.

### 3. Run the application

``` bash
python app.py
```

Then open the local address shown in the terminal in your web browser.

## 📓 Jupyter Notebook

The `SuperMarket.ipynb` notebook contains the main Machine Learning
workflow, including:

-   Dataset loading
-   Data cleaning
-   Data preparation
-   Feature selection
-   Model development
-   Model evaluation
-   Model comparison
-   Saving the trained model

## 🔮 Future Improvements

Potential improvements for future versions include:

-   Increasing the size and diversity of the dataset.
-   Improving model performance through feature engineering.
-   Hyperparameter tuning and cross-validation.
-   Adding more Machine Learning algorithms.
-   Improving dashboard design and user experience.
-   Adding prediction confidence/probability information.
-   Deploying the application online.

## 👩‍💻 Project

**Supermarket Predictor -- Machine Learning Project**

GitHub Repository:\
https://github.com/Kaushalya04/Supermarket_Predictor.git

------------------------------------------------------------------------

⭐ If you find this project useful or interesting, feel free to explore
the repository and share your feedback.
