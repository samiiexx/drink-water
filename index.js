// Copyright 2021 sfchi
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const smallCups = document.querySelectorAll('.cup-small')
const litres = document.getElementById('litres')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        highlightCups(idx)
    })
})

function highlightCups(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx-- 
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        }
        else {
            cup.classList.remove('full')

        }
    })

updateBigCup()

}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }
    else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 350}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }
    else {
        remained.style.visibility = 'visible'
        litres.innerText = `${4 - (250 * fullCups / 1000)}L`

    }
} 