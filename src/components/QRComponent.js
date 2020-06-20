import React from 'react';
import QRCode from 'qrcode.react'

function QRComponent(props) {
	return (
        <QRCode value={props.value} size={400}/>
	);
}

export default QRComponent;