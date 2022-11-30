import { RigidBody } from "@react-three/rapier"
import { useKeyboardControls } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Ball = () => {
	const body = useRef()
	const [subscribeKeys, getKeys] = useKeyboardControls()
	useFrame((state, delta) => {
		const { forward, backward, leftward, rightward } = getKeys()
		console.log(forward);
		const impulse = { x: 0, y: 0, z: 0 }
		const torque = { x: 0, y: 0, z: 0 }
		const impulseStrength = 70 * delta
		const torqueStrength = 50 * delta

		if (forward) {
			impulse.z -= impulseStrength
			torque.x -= torqueStrength
		}

		if (rightward) {
			impulse.x += impulseStrength
			torque.z -= torqueStrength
		}

		if (backward) {
			impulse.z += impulseStrength
			torque.x += torqueStrength
		}

		if (leftward) {
			impulse.x -= impulseStrength
			torque.z += torqueStrength
		}

		body.current.applyImpulse(impulse)
		body.current.applyTorqueImpulse(torque)
	})

	return (
		<RigidBody ref={body} colliders="ball"
			position={[0, 1.3, 0]}
			restitution={0.5}
			friction={1}
			linearDamping={0.5}
			angularDamping={0.5}
		>
			<mesh castShadow position={[0, 1, 10]}>
				<icosahedronGeometry args={[1.2, 10, 10]} />
				<meshStandardMaterial color="white" flatShading />
			</mesh>
		</RigidBody>
	)
}

export default Ball