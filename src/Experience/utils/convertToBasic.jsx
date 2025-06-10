// import * as THREE from 'three';

// export function convertMaterialsToBasic(materials, alphaTestValue = 0) {
//     const newMaterials = {};

//     Object.keys(materials).forEach((key) => {
//         const oldMaterial = materials[key];
//         if (oldMaterial instanceof THREE.MeshStandardMaterial) {
//             const newMaterial = new THREE.MeshBasicMaterial({
//                 map: oldMaterial.map,
//                 transparent: oldMaterial.transparent,
//                 alphaTest: oldMaterial.alphaTest ? 0.55 : alphaTestValue,
//             });
//             newMaterials[key] = newMaterial;
//         } else {
//             newMaterials[key] = oldMaterial; // Keep the original material if it's not MeshStandardMaterial
//         }
//     });
//         return newMaterials;
// }

// // import * as THREE from 'three';

// // export function convertMaterialsToBasic(materials, alphaTestValue = 0) {
// //     const newMaterials = {};

// //     Object.keys(materials).forEach((key) => {
// //         const oldMaterial = materials[key];
// //         if (oldMaterial instanceof THREE.MeshStandardMaterial) {
// //             const newMaterial = new THREE.MeshBasicMaterial({
// //             map: oldMaterial.map || null,
// //             transparent: oldMaterial.transparent,
// //             alphaTest: oldMaterial.alphaTest ? 0.55 : alphaTestValue,
// //             color: oldMaterial.color || new THREE.Color(0xffffff)  // fallback màu trắng
// //             });
// //             newMaterials[key] = newMaterial;
// //         } else {
// //             newMaterials[key] = oldMaterial; // Keep the original material if it's not MeshStandardMaterial
// //         }
// //     });
// //         return newMaterials;
// // }