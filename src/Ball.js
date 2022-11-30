import { RigidBody } from "@react-three/rapier"

const Ball = () => {
	return (
		<RigidBody colliders="ball" position={[0, 1.3, 0]}>
			<mesh castShadow position={[1, 1, 1]}>
				<sphereGeometry args={[1.2, 10, 10]} />
				<meshStandardMaterial color="mediumpurple" flatShading />
			</mesh>
		</RigidBody>
	)
}

export default Ball