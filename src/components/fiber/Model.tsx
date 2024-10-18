import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, SpotLight as SpotlightType } from "three";
import { easing, geometry } from "maath";

export default function Model(props: any) {
  const group = useRef<Group>(null);
  const light = useRef<SpotlightType>(null!);
  const { nodes: herculesNodes } = useGLTF("/static/hercules.glb") as any;

  useFrame((state, delta) => {
    easing.dampE(
      //@ts-ignore
      group.current.rotation,
      [0, -state.pointer.x * (Math.PI / 10), 0],
      1.5,
      delta
    );
    easing.damp3(
      //@ts-ignore
      group.current.position,
      [0, -5.5, 1 - Math.abs(state.pointer.x)],
      1,
      delta
    );
    easing.damp3(
      light.current.position,
      [state.pointer.x * 12, 0, 8 + state.pointer.y * 4],
      0.2,
      delta
    );
  });
  return (
    <group {...props} ref={group}>
      <mesh
        castShadow
        receiveShadow
        geometry={herculesNodes.Node1.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.17}
        position={[-6, -9.8, 0]}
      >
        <meshLambertMaterial color="gray" />
      </mesh>

      <spotLight
        angle={0.5}
        penumbra={1.5}
        ref={light}
        castShadow
        intensity={500}
        shadow-mapSize={512}
        shadow-bias={-0.0001}
        color="white"
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-5, 5, -5, 5, 0.05, 25]}
        />
      </spotLight>
    </group>
  );
}
