// 1.  includes

function customIncludes(str, searchString) {
   for (let i = 0; i <= str.length - searchString.length; i++) {
     let result = true;
     for (let j = 0; j < searchString.length; j++) {
       if (str[i + j] !== searchString[j]) {
         result = false;
         break;
       }
     }
     if (result) {
       return true;
     }
   }
   return false;
 }

 // 2. charAt 


 function customCharAt(str, index) {
   if (index >= 0 && index < str.length) {
     let characterAtIndex = str[index];
     console.log(characterAtIndex);
   } else {
     console.log("такого индекса нет");
   }
 }
 

 // 3. endsWith 
 
 function customEndsWith(str, searchWord) {
   const strLength = str.length;
   const searchWordLength = searchWord.length;

   if (strLength < searchWordLength) {
       return false; 
   }

   for (let i = 0; i < searchWordLength; i++) {
       if (str[strLength - searchWordLength + i] !== searchWord[i]) {
           return false; 
       }
   }

   return true; 
}

// 4. startsWith

function customStartsWith(str, prefix) {
   const strLength = str.length;
   const prefixLength = prefix.length;

   if (strLength < prefixLength) {
       return false; 
   }

   for (let i = 0; i < prefixLength; i++) {
       if (str[i] !== prefix[i]) {
           return false; 
       }
   }

   return true; 
}

//  5.  Slice

function customSlice(str, start, end) {
   const strLength = str.length;

   if (start < 0) start = Math.max(0, strLength + start);
   if (end < 0) end = Math.max(0, strLength + end);
      let result = '';
   for (let i = start; i < end; i++) {
       result += str[i];
   }

   return result;
}

//  6.  indexOf

function customIndexOf(str, searchValue, startIndex) {
   startIndex = startIndex || 0;
   startIndex = Math.max(0, startIndex);

   for (let i = startIndex; i < str.length - searchValue.length + 1; i++) {
       for (let j = 0; j < searchValue.length && str[i + j] === searchValue[j]; j++) {
           if (j === searchValue.length - 1) {
               return i; // Возвращаем индекс, если весь searchValue совпадает
           }
       }
   }

   return -1;
}

//  7.  replace
//  8.  replaceAll


