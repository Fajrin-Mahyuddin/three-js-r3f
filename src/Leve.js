import './styles/index.css';
import React, { useRef } from 'react'
import * as THREE from 'three';
import { useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function Level({
	count = 5,
	types = [BlockSpinner, BlockAxe, BlockLimbo],
	seed = 0
}) {

	return <>
		<BlockStart position={[0, 0, 0]} />
	</>
}