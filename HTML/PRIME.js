<!DOCTYPE html>
<HTML>
    <body>
        <script>
        var sum;
        function sumprime(num) {
         sum=0;
        function checkprime(i)
        {
        for (var k=2 ; k<i ; k++)
        {
        if (i%k ===0)
        {
        return false;
        }
        }
        return true;
        }
        for(var i = 2;i<=num ; i++)
        {
        if (checkprime(i))
        {
        sum=sum+i;
        }
    }
        return sum;
        }
        sumprime(7);
        console.log(sum);
        </script>
        </body>
</HTML>