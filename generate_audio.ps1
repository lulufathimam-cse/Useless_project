$tracks = @(
  @{ id="home_roast"; text="എന്താടാ വീണ്ടും വന്നത്? ഭക്ഷണം അല്ല, വിമർശനമാണ് ഇവിടെ ഫ്രീ!"; lang="ml" },
  @{ id="visit_1"; text="Welcome"; lang="en" },
  @{ id="visit_2"; text="വീണ്ടും? Okay then."; lang="ml" },
  @{ id="visit_3"; text="നീ വീണ്ടും? ഭക്ഷണം മാറിയിട്ടില്ല!"; lang="ml" },
  @{ id="visit_5"; text="വിശപ്പാണോ, വെറുതെ നോക്കുന്നതാണോ?"; lang="ml" },
  @{ id="visit_7"; text="ഇതൊരു museum അല്ല. Exhibition ഇല്ല ഇവിടെ."; lang="ml" },
  @{ id="visit_10"; text="ഭക്ഷണം അല്ല, വിമർശനമാണ് ഇവിടെ ഫ്രീ!"; lang="ml" },
  @{ id="visit_15"; text="നമുക്ക് serious ആയി സംസാരിക്കണം."; lang="ml" },
  @{ id="visit_20"; text="ഇത് ഫ്രിഡ്ജ് അല്ല. നിങ്ങളുടെ second home ആണ്."; lang="ml" },
  @{ id="door_close"; text="ഫ്രിഡ്ജ് അടഞ്ഞു. ഇനി മറ്റൊരു കാരണം ഉണ്ടാക്കൂ."; lang="ml" },
  @{ id="need_open"; text="ഫ്രിഡ്ജ് ആദ്യം തുറക്കൂ!"; lang="ml" },
  @{ id="stare_5"; text="എന്താ നോക്കുന്നത്?"; lang="ml" },
  @{ id="stare_10"; text="ഞാനും അറിയില്ല ഇനി എന്ത് കാണിക്കണമെന്ന്."; lang="ml" },
  @{ id="stare_15"; text="DECIDE."; lang="en" },
  @{ id="stare_20"; text="തീരുമാനം എടുക്കെടാ!"; lang="ml" },
  @{ id="stare_30"; text="ഇത് supermarket അല്ല."; lang="ml" },
  @{ id="food_pizza"; text="ഇത് എത്ര ദിവസമായി ഇവിടെ? നിങ്ങൾ ഇപ്പോൾ roommates ആണോ?"; lang="ml" },
  @{ id="food_cake"; text="Healthy lifestyle തുടങ്ങിയത് എപ്പോഴായിരുന്നു?"; lang="ml" },
  @{ id="food_chocolate"; text="ഒന്ന് മാത്രം എടുക്കുമെന്നല്ലേ? കള്ളം പറയണ്ട."; lang="ml" },
  @{ id="food_milk"; text="ഇത് expire ആയോ? ഒരുക്ക് ഉണ്ടോ? Smell ചെയ്ത് നോക്ക്."; lang="ml" },
  @{ id="food_apple"; text="An apple a day keeps the doctor away. പക്ഷേ നീ ഒരിക്കലും എടുക്കുന്നില്ല."; lang="ml" },
  @{ id="food_juice"; text="Sugar-free ആണോ? Real juice ആണോ? ഒന്നും matter ഇല്ല."; lang="ml" },
  @{ id="food_veggies"; text="WHO ARE YOU? നീ ആദ്യമായിട്ടാണ് ഇത് നോക്കുന്നത്."; lang="ml" },
  @{ id="food_leftovers"; text="ഇത് leftover ആണോ, archaeological discovery ആണോ?"; lang="ml" },
  @{ id="food_burger"; text="Gym membership ഉണ്ടോ? ഉണ്ടെങ്കിൽ waste ആണ്."; lang="ml" },
  @{ id="decide_yes"; text="Finally. ഒരു തീരുമാനം എടുത്തു. ആഘോഷം!"; lang="ml" },
  @{ id="decide_no"; text="അപ്പോ പിന്നെ എന്തിനാ തുറന്നത്? Tourism ആണോ?"; lang="ml" },
  @{ id="decide_think"; text="ഇത്ര വലിയ തീരുമാനമാണോ? UN Summit ആണോ?"; lang="ml" },
  @{ id="anger"; text="ഭക്ഷണം അല്ല, വിമർശനമാണ് ഇവിടെ ഫ്രീ! 10 പ്രാവശ്യം തുറന്നു. 10 പ്രാവശ്യവും ഭക്ഷണം മാറിയില്ല. പ്രശ്നം ഫ്രിഡ്ജിനല്ല. ഇനി ഒന്ന് ആലോചിക്ക്."; lang="ml" },
  @{ id="anger_calm"; text="ഇനി ഒന്ന് ശ്രദ്ധിക്ക്. Please."; lang="ml" },
  @{ id="boss_q"; text="തുറന്നിട്ട് അടച്ചിട്ട് വീണ്ടും തുറന്നതിന്റെ കാരണം?"; lang="ml" },
  @{ id="boss_sheri"; text="ശരി."; lang="ml" },
  @{ id="pers_disappointed"; text="നിന്നിൽ നിന്ന് കൂടുതൽ പ്രതീക്ഷിച്ചിരുന്നു."; lang="ml" },
  @{ id="pers_sarcastic"; text="Wow. Another fridge visit. Groundbreaking."; lang="en" },
  @{ id="pers_angry"; text="DO NOT OPEN ME AGAIN."; lang="en" },
  @{ id="pers_emotional"; text="നീ ഭക്ഷണം എടുക്കാതെ പോകുമ്പോൾ എനിക്ക് വിഷമമാകുന്നു."; lang="ml" },
  @{ id="pers_strictmom"; text="ആദ്യം കഴിച്ച പാത്രം കഴുകിയിട്ട് വാ."; lang="ml" },
  @{ id="pers_teacher"; text="Why are you opening the fridge instead of studying?"; lang="en" },
  @{ id="freezer_1"; text="ഇവിടെ ഒന്നും ഇല്ല. ഐസ് മാത്രം."; lang="ml" },
  @{ id="freezer_2"; text="Freezer is judging you too."; lang="en" },
  @{ id="freezer_3"; text="ഇത് freezer ആണ്. ഇവിടെ നിന്ന് brain cool ആക്കൂ."; lang="ml" }
)

$outDir = "c:\Users\intellai\Downloads\lulu\Useless_project\audio"
if (-not (Test-Path $outDir)) {
  New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

foreach ($t in $tracks) {
  $file = Join-Path $outDir ($t.id + ".mp3")
  if (-not (Test-Path $file) -or (Get-Item $file).Length -eq 0) {
    $encoded = [uri]::EscapeDataString($t.text)
    $url = "https://translate.google.com/translate_tts?ie=UTF-8&tl=" + $t.lang + "&client=tw-ob&q=" + $encoded
    try {
      Invoke-WebRequest -Uri $url -UserAgent "Mozilla/5.0" -OutFile $file -TimeoutSec 10
      Write-Host "Downloaded: $($t.id) ($((Get-Item $file).Length) bytes)"
    } catch {
      Write-Host "Failed: $($t.id) - $_"
    }
    Start-Sleep -Milliseconds 150
  } else {
    Write-Host "Exists: $($t.id)"
  }
}
