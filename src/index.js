import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Canvas } from '@react-three/fiber';
import Portfolio from './Portfolio';

const root = createRoot(document.getElementById("root"))

root.render(
	<Canvas>
		<Portfolio />
	</Canvas>
)
