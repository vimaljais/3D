import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { ContactShadows, Environment, useGLTF, OrbitControls } from "drei";
import { HexColorPicker } from "react-colorful";
import { proxy, useProxy } from "valtio";
import { Link } from "react-router-dom";

const state = proxy({
  current: null,
  items: {
    hip: "#ffffff",
    shoulder: "#ffffff",
    calf_and_low: "#ffffff",
    back_thigh: "#ffffff",
    nose: "#ffffff",
    back: "#ffffff",
    head: "#ffffff",
    front_thigh: "#ffffff",
    neck: "#ffffff",
    hand_tissue: "#ffffff",
    chest_and_abs: "#ffffff",
    front_lower_leg: "#ffffff",
    inner_upper_thigh: "#ffffff",
    feet_finger: "#ffffff",
    lowerForearm: "#ffffff",
    biceps: "#ffffff",
  },
});

function Model(props) {
  const group = useRef();
  useFrame(() => {
    group.current.rotation.y += 0.02;
  });
  const snap = useProxy(state);
  const { nodes, materials } = useGLTF("scene.gltf");
  const [hovered, set] = useState(null);
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
      hovered ? cursor : auto
    )}'), auto`;
  }, [hovered]);
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[1.9, 1.9, 1.9]}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          material-color={snap.items.hip}
          material={materials.hip}
          geometry={nodes.mesh_0.geometry}
        />
        <mesh
          material-color={snap.items.shoulder}
          material={materials.shoulder}
          geometry={nodes.mesh_1.geometry}
        />
        <mesh
          material-color={snap.items.calf_and_low}
          material={materials.calf_and_low}
          geometry={nodes.mesh_2.geometry}
        />
        <mesh
          material-color={snap.items.back_thigh}
          material={materials.back_thigh}
          geometry={nodes.mesh_3.geometry}
        />
        <mesh
          material-color={snap.items.nose}
          material={materials.nose}
          geometry={nodes.mesh_4.geometry}
        />
        <mesh
          material-color={snap.items.back}
          material={materials.back}
          geometry={nodes.mesh_5.geometry}
        />
        <mesh
          material-color={snap.items.head}
          material={materials.head}
          geometry={nodes.mesh_6.geometry}
        />
        <mesh
          material-color={snap.items.front_thigh}
          material={materials.front_thigh}
          geometry={nodes.mesh_7.geometry}
        />
        <mesh
          material-color={snap.items.neck}
          material={materials.neck}
          geometry={nodes.mesh_8.geometry}
        />
        <mesh
          material-color={snap.items.hand_tissue}
          material={materials.hand_tissue}
          geometry={nodes.mesh_9.geometry}
        />
        <mesh
          material-color={snap.items.chest_and_abs}
          material={materials.chest_and_abs}
          geometry={nodes.mesh_10.geometry}
        />
        <mesh
          material-color={snap.items.front_lower_leg}
          material={materials.front_lower_leg}
          geometry={nodes.mesh_11.geometry}
        />
        <mesh
          material-color={snap.items.inner_upper_thigh}
          material={materials.inner_upper_thigh}
          geometry={nodes.mesh_12.geometry}
        />
        <mesh
          material-color={snap.items.feet}
          material={materials.feet_finger}
          geometry={nodes.mesh_13.geometry}
        />
        <mesh
          material-color={snap.items.lowerForearm}
          material={materials.lowerForearm}
          geometry={nodes.mesh_14.geometry}
        />
        <mesh
          material-color={snap.items.biceps}
          material={materials.biceps}
          geometry={nodes.mesh_15.geometry}
        />
      </group>
    </group>
  );
}

const Light = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.2} />

      <spotLight intensity={0.2} position={[1000, 0, 0]} castShadow />
    </>
  );
};
const Picker = () => {
  const snap = useProxy(state);
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <Link to="/body">
        <h1 style={{ zIndex: "33" }}>{snap.current}</h1>
      </Link>
    </div>
  );
};

export default function Complete() {
  return (
    <>
      <Picker />
      <Canvas camera={{ position: [0, 0, 120], fov: 65 }}>
        <Light />
        <Suspense fallback={null}>
          <Model />
          <Environment files="royal_esplanade_1k.hdr" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}
