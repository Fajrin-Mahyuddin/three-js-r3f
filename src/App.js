import './styles/index.css';
import React, { useRef } from 'react'
import * as THREE from 'three';
import { useFrame, extend, useThree } from '@react-three/fiber';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Level } from './Level';
import { Physics, Debug } from '@react-three/rapier';
import { OrbitControls } from '@react-three/drei';
import Ball from './Ball';

// extend({ OrbitControls })

const App = () => {
	const boxRef = useRef()
	const { camera, gl } = useThree()
	useFrame((state, delta) => {
		// console.log("call every time");
		// boxRef.current.rotation.y += delta
		// boxRef.current.rotation.x += delta
	})
	return (
		<>
			{/* <color args={['#252731']} attach="background" /> */}
			<directionalLight
				castShadow
				position={[4, 4, 1]}
				intensity={1.5}
				shadow-mapSize={[2024, 4024]}
				shadow-camera-near={1}
				shadow-camera-far={10}
				shadow-camera-top={10}
				shadow-camera-right={10}
				shadow-camera-bottom={- 10}
				shadow-camera-left={- 10}
			/>
			<ambientLight intensity={.2} />
			<OrbitControls makeDefault />
			{/* <orbitControls args={[camera, gl.domElement]} /> */}
			<Physics>
				<Debug />
				<Ball />
				<Level />
			</Physics>
		</>
	)
}

export default App