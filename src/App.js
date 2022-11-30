import './styles/index.css';
import React, { useRef } from 'react'
import * as THREE from 'three';
import { useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls })

const App = () => {
	const boxRef = useRef()
	const { camera, gl } = useThree()
	useFrame((state, delta) => {
		console.log("call every time");
		boxRef.current.rotation.y += delta
		// boxRef.current.rotation.x += delta
	})
	return (
		<>
			<directionalLight position={[1, 2, 4]} intensity={1.5} />
			<ambientLight intensity={.2} />
			<orbitControls args={[camera, gl.domElement]} />
			<mesh ref={boxRef}>
				<boxGeometry args={[3, 3, 3]} />
				<meshStandardMaterial color="orange" />
			</mesh>
		</>
	)
}

export default App