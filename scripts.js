// scripts.js

// 絞り込み機能用のデータ（例）
const cafes = [
    { name: "カフェA", area: "東京", salary: 1200, tags: ["メイド", "レトロ"] },
    { name: "カフェB", area: "大阪", salary: 1100, tags: ["執事", "クラシック"] },
    // 他のカフェデータ
];

// 絞り込みロジック
function filterCafes() {
    const area = document.getElementById("areaFilter").value;
    const minSalary = document.getElementById("minSalary").value;
    const maxSalary = document.getElementById("maxSalary").value;
    const tag = document.getElementById("tagFilter").value;

    const filtered = cafes.filter(cafe => {
        return (area === "全て" || cafe.area === area) &&
               (cafe.salary >= minSalary && cafe.salary <= maxSalary) &&
               (tag === "全て" || cafe.tags.includes(tag));
    });

    displayCafes(filtered);
}

// カフェ一覧を表示する
function displayCafes(cafes) {
    const main = document.querySelector("main");
    main.innerHTML = "";

    cafes.forEach(cafe => {
        const cafeDiv = document.createElement("div");
        cafeDiv.className = "cafe";
        cafeDiv.innerHTML = `
            <h3>${cafe.name}</h3>
            <p>エリア: ${cafe.area}</p>
            <p>時給: ¥${cafe.salary}</p>
            <p>特徴: ${cafe.tags.join(", ")}</p>
        `;
        main.appendChild(cafeDiv);
    });
}

// 初期表示
filterCafes();
