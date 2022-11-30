import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Canvas } from '@react-three/fiber';
import { KeyboardControls } from '@react-three/drei'

const root = createRoot(document.getElementById("root"))

root.render(
	<KeyboardControls
		map={[
			{ name: 'forward', keys: ['ArrowUp', 'KeyW'] },
			{ name: 'backward', keys: ['ArrowDown', 'KeyS'] },
			{ name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
			{ name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
			{ name: 'jump', keys: ['Space'] },
		]}
	>
		<Canvas
			shadows
			camera={{
				fov: 60,
				near: 0.1,
				far: 200,
				position: [2.5, 10, 22]
			}}>
			<App />
		</Canvas>
	</KeyboardControls>

)
