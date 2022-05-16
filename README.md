# react-dev-test

Please fix me

## Getting started

1. please clone this repository to your local computer,
2. create new branch from master, and please name teh branch `[yourname]-[your title]`,
3. run `npm install` `npm start`
4. please fix this code as the description

## Project status
Hallo, mase tugas anda membuat sebuah app yang berfungsi mengolah data
`DATA_WHO_ARE_U` `react-dev-test\src\components\data\dummy-data.js` menggunakan 2 component react ada di variable `BLOCK_MAPING`,
hasil structur render htmlnya-nya harus seperti di bawah ini:

```
<div class="App">
  <div class="block_group">
    <div class="non_block_group">
      <span>Hallo I'm Apple</span>
    </div>
    <div class="block_group">
      <div class="non_block_group">
        <span>Hallo I'm Orange</span>
      </div>
      <div class="non_block_group">
        <span>Hallo I'm Banana</span>
      </div>
    </div>
  </div>

  <div class="non_block_group">
    <span>Hallo I'm Human</span>
  </div>
</div>
```

kemudian, buat 2 buat tombol, `delete` dan `add new block`

1. tombol delete berfungsi menghapus child object yang ber id `11131` sehingga element render strukturnya bakal berubah sperti ini

```
<div class="App">
  <div class="block_group">
    <div class="non_block_group">
      <span>Hallo I'm Apple</span>
    </div>
    <div class="block_group">
      <div class="non_block_group">
        <span>Hallo I'm Orange</span>
      </div>
    </div>
  </div>

  <div class="non_block_group">
    <span>Hallo I'm Human</span>
  </div>
</div>
```

2. tombol `add new block` berfungsi menambahkan data baru (`NEW_BLOCK_MEMBER`) kedalam object child yang ber ID `1113` sehingga render element berubah menjadi sperti ini

```
<div class="App">
  <div class="block_group">
    <div class="non_block_group">
      <span>Hallo I'm Apple</span>
    </div>
    <div class="block_group">
      <div class="non_block_group">
        <span>Hallo I'm Orange</span>
      </div>
      <div class="non_block_group">
        <span>Hallo I'm Banana</span>
      </div>
      <div class="block_group">
        <div class="non_block_group">
            <span>Hallo I'm Orange child</span>
        </div>
        <div class="non_block_group">
            <span>Hallo I'm Banana child</span>
        </div>
      </div>
    </div>
  </div>

  <div class="non_block_group">
    <span>Hallo I'm Human</span>
  </div>
</div>
```

## Imporrtant Notes !!!
Please do not use third party library, just use your logic, keep your code clean. thanks
