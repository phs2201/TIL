import pymysql.cursors

connection = pymysql.connect(host ='localhost',
                            user='root',
                            password='qhdkscjfwj0!',
                            database='test',
                            cursorclass=pymysql.cursors.DictCursor)

'''with connection:
    with connection.cursor() as cursor:
        # create a new record
        sql = "INSERT INTO 'root' ('email', 'password') VALUES (%s, %s)"
        cursor.execute(sql, ('aaaa@gmail.com','very'))
        
    # connection is not autocommit by default. So you must commit to save your chanege
    connection.commit() # 중요!!'''
    
    