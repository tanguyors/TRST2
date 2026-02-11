#!/bin/bash

cd "public/images/actions"

# Liste des images à télécharger avec leurs URLs possibles
declare -A images=(
    ["art-therapie.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/art-therapie.jpg"
    ["baan-jin-jai.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/baan-jin-jai.jpg"
    ["baan-kruja.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/baan-kruja.jpg"
    ["chakrit.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/chakrit.jpg"
    ["couvertures-karen.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/couvertures-karen.jpg"
    ["donation-hhn-2022.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/donation-hhn-2022.jpg"
    ["filtre-huei-kra-ting.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/filtre-huei-kra-ting.jpg"
    ["heartt-2000.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/heartt-2000.jpg"
    ["human-help.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/human-help.jpg"
    ["journee-femme.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/journee-femme.jpg"
    ["journee-femme-2023.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/journee-femme-2023.jpg"
    ["kanjana.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/kanjana.jpg"
    ["kree-kee.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/kree-kee.jpg"
    ["lit-medical.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/lit-medical.jpg"
    ["mae-song-noi.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/mae-song-noi.jpg"
    ["mae-way.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/mae-way.jpg"
    ["masques-papr.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/masques-papr.jpg"
    ["matelas-medicaux.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/matelas-medicaux.jpg"
    ["oeil-pim.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/oeil-pim.jpg"
    ["petanque.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/petanque.jpg"
    ["pharmacie.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/pharmacie.jpg"
    ["polio-2019.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/polio-2019.jpg"
    ["polio-2020.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/polio-2020.jpg"
    ["polio-2021.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/polio-2021.jpg"
    ["polio-2022.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/polio-2022.jpg"
    ["polio-2023.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/polio-2023.jpg"
    ["polio-pattaya.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/polio-pattaya.jpg"
    ["seur-2014.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/seur-2014.jpg"
    ["seur-2018.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/seur-2018.jpg"
    ["tsunami.jpg"]="https://www.rotary-pattaya-marina.org/images/actions/tsunami.jpg"
)

for img in "${!images[@]}"; do
    if [ ! -f "$img" ] || [ $(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null) -lt 1000 ]; then
        echo "Downloading $img..."
        curl -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
             -H "Accept: image/webp,image/apng,image/*,*/*;q=0.8" \
             -H "Referer: https://www.rotary-pattaya-marina.org/" \
             -o "$img" "${images[$img]}" 2>/dev/null

        # Vérifier si le téléchargement a réussi
        if [ -f "$img" ] && [ $(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null) -gt 1000 ]; then
            echo "  ✓ Success"
        else
            echo "  ✗ Failed"
        fi
    fi
done

echo "Done!"
