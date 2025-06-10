import { MeshBasicMaterial } from 'three'

export function convertMaterialsToBasic(materials, alphaTestThreshold = 0.55) {
  const newMaterials = {}

  for (const [key, material] of Object.entries(materials)) {
    const isTransparent = material.transparent && material.alphaTest === 0.55

    newMaterials[key] = new MeshBasicMaterial({
      map: material.map || null,
      transparent: isTransparent,
      alphaTest: isTransparent ? alphaTestThreshold : 0,
    })
  }

  return newMaterials
}
