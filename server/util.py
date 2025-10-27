import json
import pickle
import numpy as np
__location=None
__data_columns=None
__model=None

def get_estimated_price(location,sqft,bhk,bath):
    try:
        loc_index=__data_columns.index(location.lower())
    except:
        loc_index=-1
    x=np.zeros(len(__data_columns))
    x[0]=sqft
    x[1]=bath
    x[2]=bhk

    if loc_index>=0:
        x[loc_index]=1

    return round(__model.predict([x])[0])

def get_location_names():
    return __location

def load_saved_artifacts():
    print("loading_artifacts........start")
    global __data_columns
    global __location

    with open("./server/artifacts//columns.json", 'r') as f:
        __data_columns=json.load(f)['data-columns']
        __location=__data_columns[3:]
    global __model
    with open("./server/artifacts/price_model.pickle","rb") as f:
        __model=pickle.load(f)
    print("loading_artifacts..........done")

if __name__ == "__main__":
    load_saved_artifacts()
    print(get_location_names())
    print(get_estimated_price('vasanthapura',1200,2,3))
