# prisoners are sitting in a circle in order of their ID number. 
# Their ID numbers start at 1.
# candies will be handed out to the prisoners one by one around the circle
# until there are no candies left. The last candy to be given out is poisoned. 
# Given the number of candies (m), number of prisoners (n), and the 
# id number of the first prisoner to get a candy (id)
# give me the id of the prisoner that will get the poisoned candy

# def save_the_prisoner(n, m, id)
#     last_id = m - 1 + id 
#     if(last_id > n)
#         return n if last_id % n == 0
#         return last_id % n
#     else
#         return last_id
#     end
  
# end

def save_the_prisoner(n, m, id)
    # last prisoner id that candy is given too (goes beyond number of prisoners)
    last_id = m - 1 + id 
    # singles out last ids that are larger than the number of prisoners that would result in an answer of n
    other_last = last_id % n + n 
    # returns smallest number that would provide answer for previous two circumstances
    last_id = [last_id, other_last].min
    #solves problems where last_id is greater than n but the answer is not n
    ((last_id - 1) % n) + 1
end

puts "-------Save The Prisoners-------"
puts save_the_prisoner(5,2,1) == 2
puts save_the_prisoner(99, 99, 1) == 99
puts save_the_prisoner(49, 98, 2) == 1
puts save_the_prisoner(94431605, 679262176, 5284458) == 23525398