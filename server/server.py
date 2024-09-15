import os
import datetime
import requests
import numpy as np
import pandas as pd
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def get_history(area_type: str):
    filepath = 'static/history_0' + area_type + '.csv'
    try:
        df = pd.read_csv(filepath)
        lat = df['latitude'].tolist()
        lon = df['longitude'].tolist()
        ls_prob = df['ls_prob'].tolist()
    except:
        lat = None
        lon = None
        ls_prob = None
    return lat, lon, ls_prob

@app.route('/api/home')
def home():
    rain_total = pd.read_csv('static/rain_total.csv')
    area_name = rain_total['area_name'].tolist()
    rain_1d = rain_total['rain_1d'].tolist()
    rain_5d = rain_total['rain_5d'].tolist()
    ls_risk = rain_total['landslide_risk'].tolist()
    return jsonify({'datetime': datetime.datetime.now().strftime('%d/%m/%Y'), 'rain_1d': [f"{num:.1f}" for num in rain_1d], 'rain_5d': [f"{num:.1f}" for num in rain_5d], 'area_name': area_name,'ls_risk': [round(float(num), 2) for num in ls_risk]})

@app.route('/api/angkhang')
def angkhang():
    rain_station_csv = pd.read_csv('static/rain_station.csv')
    station_name = rain_station_csv[rain_station_csv['area_id'] == 1]['station_id'].tolist()
    rain_1d = rain_station_csv[rain_station_csv['area_id'] == 1]['rain_1d'].tolist()
    lat, lon, ls_prob = get_history('1')
    return jsonify({'datetime': datetime.datetime.now().strftime('%d/%m/%Y'), 'station_name': station_name, 'rain_1d': [round(float(num), 2) for num in rain_1d], 'lat': lat, 'lon': lon, 'ls_prob': ls_prob })

@app.route('/api/maekampong')
def maekampong():
    rain_station_csv = pd.read_csv('static/rain_station.csv')
    station_name = rain_station_csv[rain_station_csv['area_id'] == 2]['station_id'].tolist()
    rain_1d = rain_station_csv[rain_station_csv['area_id'] == 2]['rain_1d'].tolist()
    lat, lon, ls_prob = get_history('2')
    return jsonify({'datetime': datetime.datetime.now().strftime('%d/%m/%Y'), 'station_name': station_name, 'rain_1d': [round(float(num), 2) for num in rain_1d], 'lat': lat, 'lon': lon, 'ls_prob': ls_prob })

@app.route('/api/monjam')
def monjam():
    rain_station_csv = pd.read_csv('static/rain_station.csv')
    station_name = rain_station_csv[rain_station_csv['area_id'] == 3]['station_id'].tolist()
    rain_1d = rain_station_csv[rain_station_csv['area_id'] == 3]['rain_1d'].tolist()
    lat, lon, ls_prob = get_history('3')
    return jsonify({'datetime': datetime.datetime.now().strftime('%d/%m/%Y'), 'station_name': station_name, 'rain_1d': [round(float(num), 2) for num in rain_1d], 'lat': lat, 'lon': lon, 'ls_prob': ls_prob })

@app.route('/api/suthep')
def suthep():
    rain_station_csv = pd.read_csv('static/rain_station.csv')
    station_name = rain_station_csv[rain_station_csv['area_id'] == 4]['station_id'].tolist()
    rain_1d = rain_station_csv[rain_station_csv['area_id'] == 4]['rain_1d'].tolist()
    lat, lon, ls_prob = get_history('4')
    return jsonify({'datetime': datetime.datetime.now().strftime('%d/%m/%Y'), 'station_name': station_name, 'rain_1d': [round(float(num), 2) for num in rain_1d], 'lat': lat, 'lon': lon, 'ls_prob': ls_prob })

@app.route('/api/khunklang')
def khunklang():
    rain_station_csv = pd.read_csv('static/rain_station.csv')
    station_name = rain_station_csv[rain_station_csv['area_id'] == 5]['station_id'].tolist()
    rain_1d = rain_station_csv[rain_station_csv['area_id'] == 5]['rain_1d'].tolist()
    lat, lon, ls_prob = get_history('5')
    return jsonify({'datetime': datetime.datetime.now().strftime('%d/%m/%Y'), 'station_name': station_name, 'rain_1d': [round(float(num), 2) for num in rain_1d], 'lat': lat, 'lon': lon, 'ls_prob': ls_prob })

if __name__ == '__main__':
    app.run(debug=True)
