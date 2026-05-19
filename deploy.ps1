# Execute após fazer login no GitHub: gh auth login
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

if (-not (Test-Path "images\meu.jpg")) {
    Write-Host "AVISO: Coloque sua foto em images\meu.jpg antes de publicar." -ForegroundColor Yellow
}

gh auth status | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Faça login no GitHub primeiro:" -ForegroundColor Cyan
    gh auth login -h github.com -p https -w
}

$repoName = "eu-te-amo"
gh repo view $repoName 2>$null
if ($LASTEXITCODE -ne 0) {
    gh repo create $repoName --public --source=. --remote=origin --description "Declaração de amor"
} else {
    git remote add origin "https://github.com/$(gh api user -q .login)/$repoName.git" 2>$null
}

git push -u origin main
Write-Host ""
Write-Host "Repositório enviado! Agora na Netlify:" -ForegroundColor Green
Write-Host "1. https://app.netlify.com -> Add new site -> Import from Git"
Write-Host "2. Escolha o repositório '$repoName'"
Write-Host "3. Publish directory: . (ponto) -> Deploy"
