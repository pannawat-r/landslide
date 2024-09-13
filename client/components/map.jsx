'use client'
import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export const Map = (props) => {
    const { position, zoom } = props

    return (
        <MapContainer style={{ width: '100%', height: '100%', aspectRatio: 1 }} center={position} zoom={zoom}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
    )
}