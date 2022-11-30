import './styles/index.css';
import React, { useRef, useState } from 'react'
import * as THREE from 'three';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';

THREE.ColorManagement.legacyMode = false

const floorMaterial = new THREE.MeshStandardMaterial({ color: "limegreen" })
const wallMaterial = new THREE.MeshStandardMaterial({ color: "red" })
const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
const sphereGeometry = new THREE.SphereGeometry(0.8, 20, 30)

export function Level({
	count = 5,
	// types = [BlockSpinner, BlockAxe, BlockLimbo],
	seed = 0
}) {

	return <>
		<BlockStart position={[0, 0, 0]} />
		<Bounds />
	</>
}

const BlockStart = ({ position = [0, 0, 0] }) => {
	const obstacleSpinner = useRef()
	const [speed] = useState(() => (Math.random() + 2) * (Math.random() < 0.5 ? - 1 : 1))
	console.log(obstacleSpinner.current);
	useFrame((state) => {
		const time = state.clock.getElapsedTime()
		// obstacleSpinner.current.position.x = Math.sin(time * 2) * 5
		// obstacleSpinner.current.position.y = Math.cos(time * 2) * 5
		const rotation = new THREE.Quaternion()
		// rotation.setFromEuler(new THREE.Euler(0, time * speed, 0))
		// obstacleSpinner.current.setNextKinematicRotation(rotation)
	})
	return (
		<>
			{/* <group position={position}> */}
			{/* <RigidBody type="fixed"> */}
			<mesh geometry={boxGeometry} material={floorMaterial} scale={[15, 0.2, 15]} position={[0, 0, 0]} receiveShadow>
			</mesh>
			{/* </RigidBody> */}
			{/* <RigidBody ref={obstacleSpinner} type="kinematicPosition" position={[0, 0.4, 0]} restitution={0.2} friction={0}>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "orange" })} scale={[3.5, 0.5, 0.3]} castShadow position={[0, 0.3, 0]} />
			</RigidBody> */}
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "purple" })} castShadow position={[1, 5, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "purple" })} castShadow position={[3, 5, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "purple" })} castShadow position={[5, 5, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "purple" })} castShadow position={[-5, 5, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "purple" })} castShadow position={[-3, 5, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "purple" })} castShadow position={[-1, 5, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "salmon" })} castShadow position={[-4, 7, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "salmon" })} castShadow position={[-2, 7, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "salmon" })} castShadow position={[0, 7, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "salmon" })} castShadow position={[2, 7, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "salmon" })} castShadow position={[4, 7, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "yellow" })} castShadow position={[-3, 9, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "yellow" })} castShadow position={[-1, 9, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "yellow" })} castShadow position={[1, 9, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "yellow" })} castShadow position={[3, 9, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "black" })} castShadow position={[-2, 11, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "black" })} castShadow position={[0, 11, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "black" })} castShadow position={[2, 11, -7]} />
			</RigidBody>
			<RigidBody>
				<mesh geometry={boxGeometry} material={new THREE.MeshStandardMaterial({ color: "red" })} castShadow position={[0, 13, -7]} />
			</RigidBody>

			{/* </group> */}
		</>
	)
}


const Bounds = () => {
	return <>
		<RigidBody type="fixed" restitution={0.2} friction={0}>
			<mesh
				position={[15.30, 1.60, 0]}
				geometry={boxGeometry}
				material={wallMaterial}
				scale={[0.3, 1.5, 15]}
				castShadow
				receiveShadow
			/>
			<mesh
				position={[-15.30, 1.60, 0]}
				geometry={boxGeometry}
				material={wallMaterial}
				scale={[0.3, 1.5, 15]}
				castShadow
				receiveShadow
			/>
			<mesh
				position={[0, 1.60, -15]}
				geometry={boxGeometry}
				material={wallMaterial}
				scale={[0.3, 1.5, 15]}
				castShadow
				receiveShadow
				rotation={[0, Math.PI * 0.5, 0]}
			/>
			<mesh
				position={[0, 1.60, 15]}
				geometry={boxGeometry}
				material={wallMaterial}
				scale={[0.3, 1.5, 15]}
				castShadow
				receiveShadow
				rotation={[0, Math.PI * 0.5, 0]}
			/>
			<CuboidCollider
				position={[0, 0.1, 0]}
				args={[15, 0.2, 15]}
			/>
		</RigidBody>
	</>
}