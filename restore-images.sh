#!/bin/bash

# Mapping between MDX files and their corresponding images
declare -A file_to_image=(
    ["aide-buriram.mdx"]="buriram.jpg"
    ["aide-chakrit.mdx"]="oeil-pim.jpg"
    ["aide-tsunami-2004.mdx"]="tsunami.jpg"
    ["armoires-pharmacie.mdx"]="pharmacie.jpg"
    ["bourses-ywca.mdx"]="bourses-ywca-old.jpg"
    ["bourses-ywca-2024.mdx"]="bourses-ywca.jpg"
    ["chirurgie-kanjana.mdx"]="kanjana.jpg"
    ["dortoirs-karen.mdx"]="dortoirs-karen.jpg"
    ["ecole-hua-yai.mdx"]="ecole-hua-yai.jpg"
    ["electricite-mae-song-noi.mdx"]="mae-song-noi.jpg"
    ["fauteuils-roulants-2023.mdx"]="fauteuils.jpg"
    ["filtre-eau-karen.mdx"]="filtre-eau-karen.jpg"
    ["filtre-eau-kre-kee.mdx"]="kree-kee.jpg"
    ["filtre-eau-mae-song-noi.mdx"]="mae-song-noi.jpg"
    ["filtre-eau-mae-way.mdx"]="mae-way.jpg"
    ["heartt-2000.mdx"]="heartt-2000.jpg"
    ["human-help-network.mdx"]="human-help.jpg"
    ["journee-femme-2023.mdx"]="journee-femme-2023.jpg"
    ["journee-femme-2024.mdx"]="journee-femme.jpg"
    ["oeil-pim-2021.mdx"]="oeil-pim.jpg"
    ["operations-chirurgicales.mdx"]="oeil-pim.jpg"
    ["orphelinat-baan-jin-jai.mdx"]="human-help.jpg"
    ["pickup-atcc-2022.mdx"]="atcc-pickup.jpg"
    ["vaccination-polio-2006.mdx"]="polio-pattaya.jpg"
    ["world-end-polio-2023.mdx"]="polio-2023.jpg"
    ["world-end-polio-2022.mdx"]="polio-2023.jpg"
    ["world-end-polio-2021.mdx"]="polio-2023.jpg"
    ["world-end-polio-2020.mdx"]="polio-2023.jpg"
    ["world-end-polio-2019.mdx"]="polio-2023.jpg"
    ["lit-medical-2021.mdx"]="fauteuils.jpg"
    ["matelas-medicaux-2021.mdx"]="fauteuils.jpg"
    ["masques-papr-2021.mdx"]="fauteuils.jpg"
)

for locale in fr en th; do
    echo "Processing $locale..."
    cd "src/content/actions/$locale"

    for mdx_file in "${!file_to_image[@]}"; do
        img_file="${file_to_image[$mdx_file]}"

        if [ -f "$mdx_file" ] && [ -f "../../../public/images/actions/$img_file" ]; then
            # Check if image line already exists
            if ! grep -q "^image:" "$mdx_file"; then
                # Add image line after date line
                sed -i "/^date:/a image: \"/images/actions/$img_file\"" "$mdx_file"
                echo "  ✓ Added image to $mdx_file"
            fi
        fi
    done

    cd ../../..
done

echo "Done!"
