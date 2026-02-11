# Script PowerShell pour télécharger les images des membres
# Run this script: .\download-member-images.ps1

$outputDir = "public\images\membres"

# Créer le dossier s'il n'existe pas
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir
}

# Liste des images à télécharger
$images = @(
    @{name="dandoy_daniel.jpg"; url="https://www.rotary-pattaya-marina.org/img/memb/dandoy_daniel.jpg"},
    @{name="porcon_gerard.jpg"; url="https://www.rotary-pattaya-marina.org/images/membres/porcon_gerard.jpg"},
    @{name="gachoud_olivier.jpg"; url="https://www.rotary-pattaya-marina.org/img/memb/gachoux_olivier.jpg"},
    @{name="roche_michel.jpg"; url="https://www.rotary-pattaya-marina.org/images/membres/roche_michel.jpg"},
    @{name="heidi.jpg"; url="https://www.rotary-pattaya-marina.org/img/memb/heidi.jpg"},
    @{name="meyer_olivier.jpg"; url="https://www.rotary-pattaya-marina.org/img/memb/Meyerolivier.jpg"},
    @{name="eric.jpg"; url="https://www.rotary-pattaya-marina.org/images/membres/ERIC.jpg"},
    @{name="degelder_jean_pierre.jpg"; url="https://www.rotary-pattaya-marina.org/images/membres/degelber_jean_pierre.jpg"},
    @{name="chadaporn.jpg"; url="https://www.rotary-pattaya-marina.org/img/memb/Chadaporn.jpg"},
    @{name="philippe_seur.jpg"; url="https://www.rotary-pattaya-marina.org/img/memb/philippe_Seur.jpg"}
)

Write-Host "Téléchargement des images des membres..." -ForegroundColor Green

foreach ($image in $images) {
    $outputPath = Join-Path $outputDir $image.name
    Write-Host "Téléchargement de $($image.name)..." -NoNewline

    try {
        Invoke-WebRequest -Uri $image.url -OutFile $outputPath -UserAgent "Mozilla/5.0"
        Write-Host " OK" -ForegroundColor Green
    }
    catch {
        Write-Host " ERREUR" -ForegroundColor Red
        Write-Host "  $_" -ForegroundColor Red
    }
}

Write-Host "`nTéléchargement terminé!" -ForegroundColor Green
Write-Host "Les images sont dans le dossier: $outputDir" -ForegroundColor Cyan
