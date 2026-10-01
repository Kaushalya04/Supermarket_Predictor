from flask import Flask, render_template, request, jsonify
import pickle
import pandas as pd
import os


app = Flask(__name__)


# Load trained model
model_path = "models/best_supermarket_model.pkl"
feature_path = "models/feature_columns.pkl"


model = pickle.load(open(model_path, "rb"))

feature_columns = pickle.load(open(feature_path, "rb"))



@app.route("/")
def home():

    return render_template("index.html")



#frontend data receive
@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.get_json()


        # Convert input into dataframe
        input_data = pd.DataFrame([data])


        # Encode categorical values
        input_data = pd.get_dummies(input_data)


        # Match training columns
        input_data = input_data.reindex(
            columns=feature_columns,
            fill_value=0
        )


        # Prediction
        prediction = model.predict(input_data)


        return jsonify({

            "prediction": str(prediction[0])

        })


    except Exception as e:


        return jsonify({

            "error": str(e)

        }),500





if __name__ == "__main__":

    app.run(debug=True)