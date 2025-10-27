# Home-Price-prediction
Required Import Libraries for Your House Prediction Model

Flask==2.0.1

flask-cors==3.1.1

numpy==1.21.0

scikit-learn==0.24.2

pandas==1.3.0

# Overview:
Predicts house prices based on features like location, square footage, BHK, and bathrooms using a machine learning model.

# Important Files:
Model Training Script:
Preprocesses data, trains a Linear Regression model, and saves it.

Flask API:
Exposes endpoints (/get_LN for location names, /predict_home for price prediction).

Model Artifacts:
price_model.pickle: Trained model.
columns.json: Feature column names.

# Key Steps:

Data Preprocessing: Handle missing values, outliers, and feature engineering.

Model: Linear Regression for predicting house prices.

Prediction API: Flask-based API to predict price based on user input.
